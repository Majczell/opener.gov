import React, { useCallback, useEffect, useState } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/layout';
import { VStack } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import xml2js from 'xml2js';

import IData from '../interfaces/IData';
import parseKpir from '../utils/kpirParser';
import KpirView from '../components/KpirView';
import parseHeader from '../utils/headerParser';
import parseTaxpayer from '../utils/taxpayerParser';

export const Home = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string>();

  const parseJPK = useCallback((result) => {
    try {
      console.log('result', result);

      const jpk = result.JPK || result['tns:JPK'];
      if (!jpk) {
        throw new Error('File is not valid JPK file');
      }

      const header = parseHeader(jpk);
      const taxpayer = parseTaxpayer(jpk);
      const signed = !!jpk['ds:Signature'];

      let report = {};
      switch (header.code) {
        case 'JPK_PKPIR':
          report = parseKpir(jpk);
          break;
      }

      setData({
        ...header,
        taxpayer,
        signed,
        report,
      });
    } catch (e) {
      setError(e.message);
    }
  }, []);

  const onDrop = useCallback(acceptedFiles => {
    setError(null);
    const reader = new FileReader();
    const parser = new xml2js.Parser();
    for (const file of acceptedFiles) {
      reader.readAsText(file, 'UTF-8');
      reader.onload = readerEvent => {
        const xml = readerEvent.target.result;
        parser.parseString(xml, function (err, result) {
          if (err) {
            setError(err);
          } else {
            parseJPK(result);
          }
        });
      }
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.xml',
    multiple: false,
  });

  return (
    <VStack spacing={2} p={10} w='1200px' align='center'>
      {!data ? (
        <Box {...getRootProps()} p={20} border='1px dashed #999' borderRadius={8}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Upuść pliki tutaj...</p> :
              <p>Przeciągnij i upuść pliki tutaj lub kliknij aby wybrać</p>
          }
        </Box>
      ) : (
        <Box>{{
          JPK_PKPIR: <KpirView data={data} setData={setData} />,
          JPK_FA: <KpirView data={data} setData={setData} />,
          JPK_VAT: <KpirView data={data} setData={setData} />,
        }[data.code]}</Box>
      )}
      {error && <Box color='red'>{error}</Box>}
    </VStack>
  );
};

export default Home;
