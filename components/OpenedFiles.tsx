import React, { useState } from 'react';
import { Flex, Text, Box, Checkbox, CheckboxGroup } from '@chakra-ui/react';

import { convertBytes } from '../utils/helpers';
import { useAppContext } from '../context/AppProvider';
import { NotSigned, Signed } from '../icons';


const OpenedFiles = () => {
  const { openedFiles, error, selectedFiles, setSelectedFiles } = useAppContext();

console.log(selectedFiles);

  return (
    <Flex w="800px" bg="white" p="30px" rounded={20}>
      <Flex flexDirection="column" w="full">
        <Text alignSelf="center" mb="20px" fontSize="18px" fontWeight="700">Twoje pliki</Text>
        <Flex justifyContent="space-between" fontWeight="700" mb="5px" pl="20px">
          <Text w="35%" fontSize="12px">Nazwa</Text>
          <Text w="15%" fontSize="12px">Typ</Text>
          <Text w="10%" fontSize="12px">Podpisany</Text>
          <Text w="20%" fontSize="12px">Data</Text>
          <Text w="10%" fontSize="12px">Rozmiar</Text>
        </Flex>
        <CheckboxGroup colorScheme='green' onChange={setSelectedFiles}>
            {openedFiles && openedFiles.map((file, i) =>
            <Checkbox key={i} value={file.id} css={{
              ".chakra-checkbox__label": {
                width: "100%"
              }
            }}>
              <Flex w="full" justifyContent="space-between" mb="10px">
                <Text w="35%" fontSize="12px">{file.path}</Text>
                <Text w="15%" fontSize="12px">{file.type}</Text>
                <Text w="10%" fontSize="12px">{file.signatureData.isSigned ? <Signed /> : <NotSigned />}</Text>
                <Text w="20%" fontSize="12px">{new Date(file.date).toLocaleString()}</Text>
                <Text w="10%" fontSize="12px">{convertBytes(file.size)}</Text>
              </Flex>
              </Checkbox>
            )}
        </CheckboxGroup>
      </Flex>
      {error && <Box color="red">{error}</Box>}
    </Flex>
  );
};

export default OpenedFiles;