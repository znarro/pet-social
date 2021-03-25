import React from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';
import moment from 'moment';

const Metadata = ({ metadata }) => {
  return (
    <GridItem gridArea="metadata">
      <Flex justify="space-around">
        <Text size="sm">{moment(metadata.publishDate).fromNow()}</Text>
        <Text size="sm">{metadata.likes} likes</Text>
      </Flex>
    </GridItem>
  );
};

export default Metadata;
