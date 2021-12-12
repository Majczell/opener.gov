import React, { useRef } from "react";
import { Flex, VStack, Text, Link as ChakraLink, Stack, Button, Box } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowBackIcon } from "@chakra-ui/icons";
import html2pdf from 'html2pdf.js';
import { format } from "date-fns";

import Layout from "../components/Layout";
import { useAppContext } from "../context/AppProvider";
import ReportElement from "../components/ReportElement";

const Report = () => {
  const { selectedFiles } = useAppContext();
  const reportRef = useRef();

  const generatePdf = () => {
    const pdfOptions = {
      filename: `raport-${format(new Date(), 'dd-MM-yy_HH-mm')}.pdf`,
      margin: [0, 1.8, 0, 0],
      html2canvas: {
        scale: 4,
      },
      pagebreak: {
        mode: ['avoid-all'],
      }
    }
    html2pdf().set(pdfOptions).from(reportRef.current).save();
  };

  if (selectedFiles.length === 0) {
    return (
      <Layout>
        <VStack w="full" h="full" spacing={2} align="center" bg="#e9f3fe">
          <Flex mt={10}>
            <Text>Nie wybrano żadnych plików do raportu.&nbsp;</Text>
            <Link href="/">
              <ChakraLink>Wróć na stronę główną.</ChakraLink>
            </Link>
          </Flex>
        </VStack>
      </Layout>
    );
  }

  return (
    <Layout>
      <VStack w="full" spacing={2} align="center" bg="#e9f3fe" pt={10} pb={4}>
        <Flex w='800px' justify='flex-start' mb={4}>
          <Link href="/">
            <Stack spacing={2} direction='row' cursor='pointer'>
              <ArrowBackIcon w={6} h={6} />
              <Text>Wróć</Text>
            </Stack>
          </Link>
        </Flex>
        <Stack ref={reportRef} direction='column' w='780px' justify='center' pt={2}>
          {selectedFiles.map(fileId => <ReportElement key={fileId} fileId={fileId} />)}
        </Stack>
        <Button colorScheme='blue' onClick={generatePdf}>
          Generuj raport
        </Button>
      </VStack>
    </Layout>
  )
};

export default Report;
