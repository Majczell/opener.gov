import React, { useCallback, useState, useEffect } from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Button, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useDropzone } from 'react-dropzone'
import xml2js from 'xml2js'

import parseKpir from '../utils/kpirParser'
import KpirView from '../components/KpirView'
import parseHeader from '../utils/headerParser'
import parseTaxpayer from '../utils/taxpayerParser'
import { File } from './../icons'
import Layout from '../components/Layout'
import { convertBytes, urlPatternValidation } from '../utils/helpers'
import parseFa from '../utils/faParser'
import parseVat from '../utils/vatParser'

export const Home = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string>();
  const [files, setFiles] = useState<any>();
  const [recentFiles, setRecentFiles] = useState<any>()
  const [url, setUrl] = useState({
    URL: "",
    isTrueVal: false
  });

  useEffect(() => {
    const itemsFromLS = JSON.parse(localStorage.getItem("lastProcessedFiles")) || [];
    setRecentFiles(itemsFromLS);
  },[]);

  const changeUrl = event => {
    const { value } = event.target;
    const isTrueVal = !value || urlPatternValidation(value);

    setUrl({
      URL: value,
      isTrueVal
    });
  };

  const parseJPK = useCallback((result) => {
    try {
      const jpk = result.JPK || result['tns:JPK']
      if (!jpk) {
        throw new Error('File is not valid JPK file')
      }

      const header = parseHeader(jpk)
      const taxpayer = parseTaxpayer(jpk)
      const signed = !!jpk['ds:Signature']

      let report = {}
      switch (header.code) {
        case 'JPK_PKPIR':
          report = parseKpir(jpk);
          break;
        case 'JPK_FA':
          report = parseFa(jpk);
          break;
        case 'JPK_VAT':
          report = parseVat(jpk);
          break;
      }

      setData({
        ...header,
        taxpayer,
        signed,
        report,
      })
    } catch (e) {
      setError(e.message)
    }
  }, [])

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
console.log(acceptedFiles);

    const parsedAcceptedFiles = acceptedFiles.reduce((acc, curr)=> {
      const {size, path, lastModified, type } = curr;
      return [...acc, {size, path, lastModified, type}]
    }, [])

    const itemsFromLS = JSON.parse(localStorage.getItem("lastProcessedFiles")) || [];
    setRecentFiles(parsedAcceptedFiles.concat(itemsFromLS));

    localStorage.setItem("lastProcessedFiles", JSON.stringify(parsedAcceptedFiles.concat(itemsFromLS)))
    setError(null);
    const reader = new FileReader();
    const parser = new xml2js.Parser();
    for (const file of acceptedFiles) {
      reader.readAsText(file, 'UTF-8')
      reader.onload = (readerEvent) => {
        const xml = readerEvent.target.result
        parser.parseString(xml, function (err, result) {
          if (err) {
            setError(err)
          } else {
            parseJPK(result)
          }
        })
      }
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Layout>
      <VStack w="full" h="full" spacing={2} p={10} align="center" bg="#e9f3fe">
        {!data ? (
          <Flex flexDirection="column">
            <Flex p="30px" bg="#FFF" rounded={20}>
              <Flex
                flexDir="column"
                alignItems="center"
                {...getRootProps()}
                p="30px 60px"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='%23A3C1ECFF' stroke-width='3' stroke-dasharray='10%2c 20' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                }}
                borderRadius="25px"
                fontWeight="500"
                color="#727473"
                cursor="pointer"
              >
                <File w="100px" h="100px" />
                <input {...getInputProps()} />
                {isDragActive ? (
                  <Text>Upuść pliki tutaj...</Text>
                ) : (
                  <Text mt={10}>Przeciągnij i upuść pliki tutaj lub kliknij, aby wybrać</Text>
                )}
              </Flex>
            </Flex>
            <InputGroup mt="20px" border="1px solid #cbd5e0" rounded={20}>
              <Input bg="#FFF" placeholder="Link do pliku" border="none" rounded={20} fontSize="12px" onChange={changeUrl}/>
              <InputRightElement w="110px" roundedRight={20}>
                <Button 
                  roundedLeft={0} 
                  roundedRight={20} 
                  fontSize="12px"
                >Importuj z URL</Button>
              </InputRightElement>
            </InputGroup>
                {url.URL !== "" && !url.isTrueVal && <Text fontSize="10px" mt="5px" color="red">URL is not valid</Text>}
            <Text mt="30px">Ostatnio otwarte pliki</Text>
            {recentFiles && recentFiles.map((file, i) => 
            <Flex key={i} justifyContent="space-between">
              <Text fontSize="12px">{file.path}</Text>
              <Text fontSize="12px">{convertBytes(file.size)}</Text>
            </Flex>
            )}
          </Flex>
        ) : (
          <Box>
            {
              {
                JPK_PKPIR: <KpirView data={data} setData={setData} />,
                JPK_FA: <KpirView data={data} setData={setData} />,
                JPK_VAT: <KpirView data={data} setData={setData} />,
              }[data.code]
            }
          </Box>
        )}
        {error && <Box color="red">{error}</Box>}
      </VStack>
    </Layout>
  )
}

export default Home;
