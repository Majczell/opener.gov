import React from "react";
import { Text, VStack, Badge } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/react";
import { capitalize } from "lodash";
import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";
import { JPK_Names } from "../utils/config";

const Header = ({ data }) => {
  if (!data) {
    return null;
  }
  console.log(data);
  
  return (
    <VStack w='full' align='start' spacing={0}>
      <Text fontSize='2xl'>{capitalize(JPK_Names[data.code])}</Text>
      <HStack justify='flex-start'>
        <Text>{data.taxpayer.name}</Text>
        <Badge justifySelf='end' colorScheme='green' variant='solid' fontWeight={400}>{data.taxpayer.vatId}</Badge>
      </HStack>
      <HStack w='full' justify='space-between'>
        <Text fontSize='sm' color='#777'>Utworzono: {format(parseISO(data.created), 'PPpp', { locale: pl })}</Text>
        <Text fontSize='sm' color='green'>{data.signatureData.isSigned && 'Dokument podpisany elektronicznie'}</Text>
      </HStack>
    </VStack>
  );
};

export default Header;
