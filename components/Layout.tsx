import React from 'react';
import { Flex,Text, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image'
import Settings from './Settings';

const Layout = ({children}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Flex w="full" flexDir="column">
      <Settings isOpen={isOpen} onClose={onClose} />
      <Flex bg="#FFF" h="60px" w="full" alignItems="center" px="60px" justifyContent="space-between" position="fixed">
        <Image src='/openergov.png' width="136" height="26" alt="test" />
        <Text cursor="pointer" onClick={onOpen}>Ustawienia</Text>
      </Flex>
      <Flex minH='calc(100vh - 60px)' overflow='auto' mt="60px" justifyContent="center" bg="#e9f3fe">
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
