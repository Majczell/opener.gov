import { Badge, Box, Flex, Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import { format } from "date-fns";
import { pl } from 'date-fns/locale'
import React, { useMemo } from "react";

import { useAppContext } from "../context/AppProvider";
import { convertBytes } from "../utils/helpers";
import Signature from "./Signature";

const ReportElement = ({ fileId }: { fileId: string }) => {
  const { openedFiles } = useAppContext();
  const file = useMemo(() => openedFiles.find(({ id }) => id === fileId), [fileId, openedFiles]);

  return (
    <Flex w='full' p={6} bgColor='white' rounded='xl' direction='column' borderColor='#e9f3fe' borderWidth='2px'>
      <Flex w='full' justify='space-between'>
        <Stack w='full'>
          <Text fontSize='xl'>
            {file.name}
          </Text>
          <Text fontSize='sm'>
            Zweryfikowano: {format(new Date(file.date), 'p PPP', { locale: pl })}
          </Text>
          <Text fontSize='sm'>
            {file.signatureData.isSigned
              ? <Text color='green.600'>Dokument podpisany elektronicznie</Text>
              : <Text color='red.600'>Brak podpisu</Text>
            }
          </Text>
        </Stack>
        <Stack>
          <Badge textAlign='center' p={2}>
            <Text fontWeight='400'>Rozmiar:</Text>
            <Text>{convertBytes(file.size)}</Text>
          </Badge>
          <Badge textAlign='center' p={2}>
            <Text fontWeight='400'>Format:</Text>
            <Text color={file.fileExtension !== file.dataExtension ? 'red' : 'default'}>{file.fileExtension}</Text>
          </Badge>
          <Badge textAlign='center' p={2}>
            <Text fontWeight='400'>Rozszerzenie:</Text>
            <Text>{file.dataExtension}</Text>
          </Badge>
        </Stack>
      </Flex>
      {file.signatureData.isSigned && <Signature signatureData={file.signatureData} />}
    </Flex>
  );
};

export default ReportElement;
