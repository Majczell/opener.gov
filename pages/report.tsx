import React, { useRef } from "react";
import { Flex, VStack, Text, Link as ChakraLink, Stack, Button } from "@chakra-ui/react";
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
      <VStack w="full" spacing={2} align="center" bg="#e9f3fe" pb={4}>
        <Stack bg="#e9f3fe" position='fixed' w='800px' justify='space-between' p={4} align='center' direction='row'>
          <Link href="/">
            <Stack spacing={2} direction='row' cursor='pointer'>
              <ArrowBackIcon w={6} h={6} />
              <Text>Wróć</Text>
            </Stack>
          </Link>
          <Button  colorScheme='blue' onClick={generatePdf}>
            Generuj raport
          </Button>
        </Stack>
        <Stack pt={16} ref={reportRef} direction='column' w='780px' justify='center'>
          {selectedFiles.map(fileId => <ReportElement key={fileId} fileId={fileId} />)}
        </Stack>
      </VStack>
    </Layout>
  )
};

export default Report;
