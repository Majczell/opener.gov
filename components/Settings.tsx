import React from 'react';
import { 
  Flex,
  Text,
  Modal, 
  ModalBody, 
  ModalContent, 
  NumberInput, 
  NumberInputField, 
  NumberInputStepper, 
  NumberIncrementStepper,
  NumberDecrementStepper, 
  ModalCloseButton,
  ModalOverlay
} from '@chakra-ui/react';
import { useAppContext } from '../context/AppProvider';

const Settings = ({ isOpen, onClose}) => {
  const { maxFilesUploaded, maxFilesOnList, setMaxFilesUploaded, setMaxFilesOnList, setOpenedFiles } = useAppContext();
  
  const changeMaxFiles = (e) => {
    localStorage.setItem("maxNumberOfFilesUploaded",JSON.stringify(parseInt(e)));
    setMaxFilesUploaded(parseInt(e));
  }

  const changeMaxFilesOnTheList = (e) => {
    const localValue = localStorage.getItem("lastProcessedFiles");
    if(e < JSON.parse(localValue)?.length) {
      const newOpenedFiles = JSON.parse(localValue).slice(-parseInt(e));
      localStorage.setItem("lastProcessedFiles", JSON.stringify(newOpenedFiles));
      setOpenedFiles(newOpenedFiles);
    }
    
    if(parseInt(e) < maxFilesUploaded) {
      localStorage.setItem("maxNumberOfFilesOnTheList",JSON.stringify(parseInt(e)));
      setMaxFilesUploaded(parseInt(e));
    }
    localStorage.setItem("maxNumberOfFilesOnTheList",JSON.stringify(parseInt(e)));
    setMaxFilesOnList(parseInt(e));
  }

  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent p="70px">
        <ModalCloseButton />
        <ModalBody>
          <Flex w="450px" direction="column">
            <Flex alignItems="center" justifyContent="space-between">
              <Text mr="30px">Maksymalna ilość plików przesłanych</Text>
              <NumberInput w="150px" onChange={changeMaxFiles} value={maxFilesUploaded} min={1} max={maxFilesOnList}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
            <Flex alignItems="center" mt="10px" justifyContent="space-between">
              <Text mr="30px">Maksymalna ilość plików na liście</Text>
              <NumberInput w="150px" onChange={changeMaxFilesOnTheList} value={maxFilesOnList} min={1} max={50}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Settings;
