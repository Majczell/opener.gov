import React from "react";
import { VStack } from "@chakra-ui/layout";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { HStack, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr, Text } from "@chakra-ui/react";

import Header from "./Header";

const KpirView = ({ data, setData }) => {
  console.log('data', data);

  return (
    <VStack w='1200px'>
      <HStack w='full' spacing={6}>
        <ArrowBackIcon w={6} h={6} cursor='pointer' onClick={() => setData(null)} />
        <Header data={data} />
      </HStack>
      <Table variant='simple' w='1200px'>
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th>Lp.</Th>

            <Th>Data i numer dowodu</Th>
            {/* <Th>Data</Th> */}
            {/* <Th>Numer dowodu</Th> */}

            <Th>Kontrahent</Th>
            {/* <Th>Adres kontrahenta</Th> */}

            <Th>Opis zdarzenia</Th>

            <Th>Przychody</Th>
            {/* <Th>Sprzedaż towarów i usług</Th> */}
            {/* <Th>Pozostałe przychody</Th>
            <Th>Razem przychód</Th> */}

            <Th>Wydatki</Th>
            {/* <Th>Zakup towarów handlowych i materiałów</Th>
            <Th>Koszty uboczne zakupu</Th>
            <Th>Wynagrodzenie w gotówce i naturze</Th>
            <Th>Pozostałe wydatki</Th>
            <Th>Razem wydatki</Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {(data.report?.rows || []).map(row => (
            <Tr>
              <Td isNumeric>{row.no}</Td>

              <Td>
                <Text>
                  {row.date}
                </Text>
                <Text>
                  {row.number}
                </Text>
              </Td>
              {/* <Td>{row.date}</Td> */}
              {/* <Td>{row.number}</Td> */}

              <Td>
                <Text>
                  {row.contractorName}
                </Text>
                <Text>
                  {row.contractorAddress}
                </Text>
              </Td>
              {/* <Td>{row.contractorName}</Td>
              <Td>{row.contractorAddress}</Td> */}

              <Td>{row.description}</Td>

              <Td>
                <Text>
                  {row.goodsAndServicesIncome}
                </Text>
                <Text>
                  {row.otherIncome}
                </Text>
                =
                <Text>
                  {row.totalIncome}
                </Text>
              </Td>
              {/* <Td isNumeric>{row.goodsAndServicesIncome}</Td>
              <Td isNumeric>{row.otherIncome}</Td>
              <Td isNumeric>{row.totalIncome}</Td> */}

              <Td>
                <Text>
                  {row.goodsCost}
                </Text>
                <Text>
                  {row.sideCost}
                </Text>
                <Text>
                  {row.salaryCost}
                </Text>
                <Text>
                  {row.otherCost}
                </Text>
                =
                <Text>
                  {row.totalCost}
                </Text>
              </Td>
              {/* <Td isNumeric>{row.goodsCost}</Td>
              <Td isNumeric>{row.sideCost}</Td>
              <Td isNumeric>{row.salaryCost}</Td>
              <Td isNumeric>{row.otherCost}</Td>
              <Td isNumeric>{row.totalCost}</Td> */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

export default KpirView;
