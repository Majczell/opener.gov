import React from 'react';
import { Flex, ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Flex w='100vw' h='100vh' justify='center'>
      <Component {...pageProps} />
    </Flex>
  </ChakraProvider>
);

export default MyApp;
