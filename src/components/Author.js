import React from 'react';
import { GridItem, Heading } from '@chakra-ui/react';

const Author = ({ authorInfo }) => {
  return (
    <GridItem gridArea="author">
      <Heading as="h2" size="md">
        {`${authorInfo.firstName} ${authorInfo.lastName}`}
      </Heading>
    </GridItem>
  );
};

export default Author;
