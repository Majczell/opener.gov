import React from 'react'
import { VStack } from '@chakra-ui/react'

import Layout from '../components/Layout'
import { IJpkPkpirReport } from '../interfaces/IJpkPkpir'
import { IJpkFaReport } from '../interfaces/IJpkFa'
import { IJpkVatReport } from '../interfaces/IJpkVat'
import Upload from '../components/Upload'
import OpenedFiles from '../components/OpenedFiles'

export type IJpkReport = IJpkPkpirReport | IJpkFaReport | IJpkVatReport;

export const Home = () => {
  return (
    <Layout>
      <VStack w="full" spacing={2} align="center" bg="#e9f3fe">
        <Upload />
        <OpenedFiles />
      </VStack>
    </Layout>
  )
};

export default Home;
