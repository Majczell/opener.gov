import React from 'react'
import {  Table, Tbody, Td, Th, Thead, Tr, Text, Flex } from '@chakra-ui/react'

import { IReport } from '../interfaces/IReport'
import { IJpkPkpirReport } from '../interfaces/IJpkPkpir'

const KpirView = ({
  data,
}: {
  data: IReport<IJpkPkpirReport>
}) => {
  return (
    <Table marginTop="100px !important" variant="simple" w="1200px" rounded="10px">
      <Thead>
        <Tr>
          <Th>Lp.</Th>
          <Th>Data i numer dowodu</Th>
          <Th>Kontrahent</Th>
          <Th>Opis zdarzenia</Th>
          <Th>Przychody</Th>
          <Th>Wydatki</Th>
        </Tr>
      </Thead>
      <Tbody>
        {(data?.report?.rows || []).map((row) => (
          <Tr key={row.K_1} bg="white">
            <Td isNumeric>{row.K_1}</Td>

            <Td>
              <Text>{row.K_2}</Text>
              <Text>{row.K_3}</Text>
            </Td>

            <Td>
              <Text>{row.K_4}</Text>
              <Text>{row.K_5}</Text>
            </Td>

            <Td>{row.K_6}</Td>

            <Td textAlign="center">
              <Flex direction="column" minH="full">
                <Text>{row.K_7}</Text>
                <Text>{row.K_8}</Text>
                <Text bg="green" mt="45px" color="white" p="5px" fontWeight="700" rounded="10px">{row.K_9}</Text>
              </Flex>
            </Td>

            <Td textAlign="center">
              <Text>{row.K_10}</Text>
              <Text>{row.K_11}</Text>
              <Text>{row.K_12}</Text>
              <Text>{row.K_13}</Text>
              
              <Text bg="red" mt="5px" color="white" p="5px" fontWeight="700" rounded="10px">{row.K_14}</Text>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default KpirView;
