import React, { useCallback, useState, useEffect } from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Button, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useDropzone } from 'react-dropzone'
import xml2js from 'xml2js'
import { v4 as uuidv4 } from 'uuid';

import parseJpkKpir from '../utils/jpkPkpirParser'
import KpirView from '../components/KpirView'
import parseJpkHeader from '../utils/jpkHeaderParser'
import parseJpkTaxpayer from '../utils/jpkTaxpayerParser'
import { File as FileIcon } from './../icons'
import Layout from '../components/Layout'
import { convertBytes, urlPatternValidation } from '../utils/helpers'
import parseJpkFa from '../utils/jpkFaParser'
import { IJpkPkpirReport } from '../interfaces/IJpkPkpir'
import { IReport } from '../interfaces/IReport'
import { IJpkFaReport } from '../interfaces/IJpkFa'
import parseJpkVat from '../utils/jpkVatParser'
import { IJpkVatReport } from '../interfaces/IJpkVat'
import axios from 'axios'
import validateSignature from '../services/signature'
import { IFile } from '../interfaces/IFile'

export type IJpkReport = IJpkPkpirReport | IJpkFaReport | IJpkVatReport;

export const Home = () => {
  const [openedFiles, setOpenedFiles] = useState<(IFile & IReport<IJpkReport>)[]>([]);
  const [loadedFiles, setLoadedFiles] = useState<{ id: string; file: File; }[]>([]);
  const [error, setError] = useState<string>();
  const [url, setUrl] = useState({
    URL: "",
    isTrueVal: false
  });

  useEffect(() => {
    const itemsFromLS = JSON.parse(localStorage.getItem("lastProcessedFiles")) || [];
    setOpenedFiles(itemsFromLS);
  }, []);

  const changeUrl = event => {
    const { value } = event.target;
    const isTrueVal = !value || urlPatternValidation(value);

    setUrl({
      URL: value,
      isTrueVal
    });
  };

  const parseJPK = useCallback((result): IReport<IJpkReport> => {
    try {
      const jpk = result.JPK || result['tns:JPK']
      if (!jpk) {
        throw new Error('File is not valid JPK file')
      }

      const header = parseJpkHeader(jpk)
      const taxpayer = parseJpkTaxpayer(jpk)
      const isSigned = !!jpk['ds:Signature']

      let report: IJpkReport;
      switch (header.code) {
        case 'JPK_PKPIR':
          report = parseJpkKpir(jpk);
          break;
        case 'JPK_FA':
          report = parseJpkFa(jpk);
          break;
        case 'JPK_VAT':
          report = parseJpkVat(jpk);
          break;
      }
      return {
        ...header,
        taxpayer,
        report,
        signatureData: {
          isSigned,
        },
      };
    } catch (e) {
      setError(e.message)
    }
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    const getFileFields = (file): IFile => ({
      size: file.size,
      path: file.path,
      type: file.type,
      date: new Date(),
    });

    setError(null);
    const parser = new xml2js.Parser();
    for (const file of acceptedFiles) {
      const fileId = uuidv4();
      setLoadedFiles(loadedFiles => [...loadedFiles, { id: fileId, file }]);
      if (file.type === 'text/xml') {
        const xmlReader = new FileReader();
        xmlReader.readAsText(file, 'UTF-8')
        xmlReader.onload = (readerEvent) => {
          const xml = readerEvent.target.result
          parser.parseString(xml, async (err, result) => {
            if (err) {
              setError(err)
            } else {
              const data = parseJPK(result);
              if (data.signatureData.isSigned) {
                data.signatureData = await validateSignature(file);
              }
              const fileData: IFile & IReport<IJpkReport> = {
                id: fileId,
                ...data,
                ...getFileFields(file),
              };
              const itemsFromLS = JSON.parse(localStorage.getItem("lastProcessedFiles")) || [];
              const newOpenedFiles = [...itemsFromLS, fileData].slice(0, 20);
              localStorage.setItem("lastProcessedFiles", JSON.stringify(newOpenedFiles));
              setOpenedFiles(newOpenedFiles);
            }
          })
        }
      } else {
        const itemsFromLS = JSON.parse(localStorage.getItem("lastProcessedFiles")) || [];
        const fileData: IFile & Pick<IReport<IJpkReport>, "signatureData"> = {
          id: fileId,
          signatureData: {
            isSigned: false,
          },
          ...getFileFields(file),
        };
        const newOpenedFiles = [...itemsFromLS, fileData].slice(0, 20);
        localStorage.setItem("lastProcessedFiles", JSON.stringify(newOpenedFiles));
        setOpenedFiles(newOpenedFiles);
      }
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Layout>
      <VStack w="full" h="full" spacing={2} p={10} align="center" bg="#e9f3fe">
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
              <FileIcon w="100px" h="100px" />
              <input {...getInputProps()} />
              {isDragActive ? (
                <Text>Upuść pliki tutaj...</Text>
              ) : (
                <Text mt={10}>Przeciągnij i upuść pliki tutaj lub kliknij, aby wybrać</Text>
              )}
            </Flex>
          </Flex>
          <InputGroup mt="20px" border="1px solid #cbd5e0" rounded={20}>
            <Input bg="#FFF" placeholder="Link do pliku" border="none" rounded={20} fontSize="12px" onChange={changeUrl} />
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
          {openedFiles && openedFiles.map((file, i) =>
            <Flex key={i} justifyContent="space-between">
              <Text fontSize="12px">{file.path}</Text>
              <Text fontSize="12px">{convertBytes(file.size)}</Text>
            </Flex>
          )}
        </Flex>
        {error && <Box color="red">{error}</Box>}
      </VStack>
    </Layout>
  )
}

export default Home;
