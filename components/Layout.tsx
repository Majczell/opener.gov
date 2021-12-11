import React from 'react';
import { Flex } from '@chakra-ui/react';
import Image from 'next/image'

const Layout = ({children}) => {
  return (
    <Flex w="full" h="full" flexDir="column">
      <Flex bg="#FFF" h="60px" alignItems="center" mx="60px" >
        <Image src='/openergov.png' width="136" height="26" alt="test" />
      </Flex>
      {children}
    </Flex>
  );
};

export default Layout;
