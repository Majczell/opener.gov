import { Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";

const Signature = ({ signatureData }) => {

  const renderConstraint = constraint => {
    return (
      <Flex fontSize='sm' borderBottom='1px solid rgba(0, 0, 0, 0.1)' justify='space-between'>
        <Stack>
          <Text>{constraint.value}</Text>
          {constraint.message && <Text>{constraint.status}: {constraint.message}</Text>}
        </Stack>
        <Text>{constraint.status}</Text>
      </Flex>
    );
  };

  const renderBlock = block => {
    return (
      <Stack spacing={4} justify='space-between'>
        <Flex justify='space-between'>
          <Text fontSize='md'>{block.title}</Text>
          <Text>{block.status}</Text>
        </Flex>
        {block.constraint && (
          <Stack>
            {block.constraint.map(renderConstraint)}
          </Stack>
        )}
        {block.blocks && (
          <Stack spacing={8}>
            {block.blocks.map(renderBlock)}
          </Stack>
        )}
      </Stack>
    );
  }

  return (
    <Stack spacing={8} mt={4}>
      <Text fontSize='xl'>Weryfikacja podpisu</Text>
      {signatureData.verifiedData.map((blockFirst, i) => (
        <Stack key={i} spacing={2}>
          {blockFirst.name && <Text fontSize='lg' fontWeight='500'>{blockFirst.name}</Text>}
          {blockFirst.title && <Text fontSize='md' fontWeight='500'>{blockFirst.title}</Text>}
          {blockFirst.blocks && (
            <Stack spacing={8}>
              {blockFirst.blocks.map(renderBlock)}
            </Stack>
          )}
          {blockFirst.constraint && (
            <Stack>
              {blockFirst.constraint.map(renderConstraint)}
            </Stack>
          )}
        </Stack>
      ))}
    </Stack>
  )
}

export default Signature;
