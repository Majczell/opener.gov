import React, { useMemo } from 'react'
import { Flex, HStack, VStack } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import Header from '../../components/Header'
import { useAppContext } from '../../context/AppProvider'
import { useRouter } from 'next/router'
import Link from 'next/link'
import KpirView from '../../components/KpirView'
import Layout from '../../components/Layout'

const Jpk = () => {
  const { openedFiles } = useAppContext()

  const router = useRouter()
  const file = useMemo(
    () => openedFiles.find(({ id }) => id === router.query.jpk_id),
    [openedFiles, router.query.jpk_id]
  )

  return (
    <Layout>
      <VStack w="1200px">
        <HStack w="full" spacing={6} position="fixed" p="10px 50px" bg="#e9f3fe" rounded="10px">
          <Link href="/">
            <ArrowBackIcon w={6} h={6} cursor="pointer" />
          </Link>
          <Header data={file} />
        </HStack>
        <KpirView data={file} />
      </VStack>
    </Layout>
  )
}

export default Jpk
