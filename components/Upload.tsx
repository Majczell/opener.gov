import React, { useCallback, useState } from 'react';
import { Button, Flex, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone'
import xml2js from 'xml2js'
import { v4 as uuidv4 } from 'uuid';
import FileType from 'file-type/browser';

import { File as FileIcon } from './../icons'
import { IFile } from '../interfaces/IFile';
import { IReport } from '../interfaces/IReport';
import { IJpkReport } from '../pages';
import validateSignature from '../services/signature';
import parseJpkHeader from '../utils/jpkHeaderParser';
import parseJpkTaxpayer from '../utils/jpkTaxpayerParser';
import parseJpkKpir from '../utils/jpkPkpirParser';
import parseJpkFa from '../utils/jpkFaParser';
import parseJpkVat from '../utils/jpkVatParser';
import { urlPatternValidation } from '../utils/helpers';
import { useAppContext } from '../context/AppProvider';
import axios from 'axios';

const Upload = () => {
  const { setLoadedFiles, setError, setOpenedFiles, maxFilesUploaded, maxFilesOnList } = useAppContext();
  const [url, setUrl] = useState({
    URL: "",
    isTrueVal: false
  });

  const toast = useToast()

  const onDrop = useCallback(async (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      toast({
        title: `Maksymalna ilość plików wynosi ${maxFilesUploaded}`,
        status: "error",
        isClosable: true,
      })
    }

    const getFileFields = async (file): Promise<IFile> => {
      const dataType = await FileType.fromBlob(file);
      return {
        fileExtension: file.name.split('.').slice(-1)[0],
        dataExtension: dataType?.ext,
        size: file.size,
        name: file.name,
        date: new Date(),
      };
    };

    setError(null);
    const parser = new xml2js.Parser();
    for (const file of acceptedFiles) {
      const fileFields = await getFileFields(file);
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
                ...fileFields,
              };
              const itemsFromLS = JSON.parse(localStorage.getItem("lastProcessedFiles")) || [];
              const newOpenedFiles = [...itemsFromLS, fileData].slice(-maxFilesOnList);
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
          ...fileFields,
        };
        const newOpenedFiles = [...itemsFromLS, fileData].slice(-maxFilesOnList);
        localStorage.setItem("lastProcessedFiles", JSON.stringify(newOpenedFiles));
        setOpenedFiles(newOpenedFiles);
      }
    }
  }, [maxFilesOnList]);

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

  const changeUrl = event => {
    const { value } = event.target;
    const isTrueVal = !value || urlPatternValidation(value);

    setUrl({
      URL: value,
      isTrueVal
    });
  };

  const getFromUrl = async () => {
    const fileData = await axios.get('/api/getFile', { responseType: 'blob', params: { url: url.URL } });
    const fileName = url.URL.split('/').slice(-1)[0];
    const file: any = new File([fileData.data], fileName);
    onDrop([file], []);
    setUrl({
      URL: '',
      isTrueVal: true,
    });
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, maxFiles: maxFilesUploaded });

  return (
    <Flex flexDir="column" p={10}>
      <Flex p="20px" bg="#FFF" rounded={20}>
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
          <FileIcon w="50px" h="50px" />
          <input {...getInputProps()} />
          {isDragActive ? (
            <Text w="300px" mt={5} fontSize="12px" textAlign="center">Upuść pliki tutaj...</Text>
          ) : (
            <Text w="300px" mt={5} fontSize="12px">Przeciągnij i upuść pliki tutaj lub kliknij, aby wybrać</Text>
          )}
        </Flex>
      </Flex>
      <InputGroup h="30px" mt="20px" border="1px solid #cbd5e0" rounded={20}>
        <Input value={url.URL} h="28px" bg="#FFF" placeholder="Link do pliku" border="none" rounded={20} fontSize="12px" onChange={changeUrl} />
        <InputRightElement w="110px" h="28px" roundedRight={20}>
          <Button
            h="28px"
            roundedLeft={0}
            roundedRight={20}
            fontSize="12px"
            onClick={getFromUrl}
            disabled={!url.isTrueVal}
          >Importuj z URL</Button>
        </InputRightElement>
      </InputGroup>
      {url.URL !== "" && !url.isTrueVal && <Text fontSize="10px" mt="5px" color="red">URL is not valid</Text>}
    </Flex>
  );
};

export default Upload;
