import React from 'react';
import { Flex, ChakraProvider } from '@chakra-ui/react'
import AppProvider from '../context/AppProvider';

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider>
    <AppProvider {...pageProps}>
      <Flex minH='100vh' justify='center'>
        <Component {...pageProps} />
      </Flex>
    </AppProvider>
  </ChakraProvider>
);

export default MyApp;
