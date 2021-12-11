import React, { useState, useEffect } from 'react'
import { VStack } from '@chakra-ui/react'

import Layout from '../components/Layout'
import { IJpkPkpirReport } from '../interfaces/IJpkPkpir'
import { IReport } from '../interfaces/IReport'
import { IJpkFaReport } from '../interfaces/IJpkFa'
import { IJpkVatReport } from '../interfaces/IJpkVat'
import { IFile } from '../interfaces/IFile'
import Upload from '../components/Upload'
import OpenedFiles from '../components/OpenedFiles'
import AppProvider, { useAppContext } from '../context/AppProvider'

export type IJpkReport = IJpkPkpirReport | IJpkFaReport | IJpkVatReport;

export const Home = () => {
  const { error, setError, setOpenedFiles, } = useAppContext()

  useEffect(() => {
    const itemsFromLS = JSON.parse(localStorage.getItem("lastProcessedFiles")) || [];
    setOpenedFiles(itemsFromLS);
  }, []);

  return (
    <Layout>
      <VStack w="full" h="full" spacing={2} align="center" bg="#e9f3fe">
        <Upload />
        <OpenedFiles />
      </VStack>
    </Layout>
  )
};

const HomeWithContext = (props) => (
  <AppProvider {...props}>
    <Home {...props} />
  </AppProvider>
);

export default HomeWithContext;
