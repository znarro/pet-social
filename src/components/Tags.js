import React from 'react';
import { GridItem, HStack, Tag } from '@chakra-ui/react';

const Tags = ({ tags }) => {
  return (
    <GridItem gridArea="tags">
      <HStack spacing={4}>
        {tags.map(tag => (
          <Tag size="sm" variant="solid" colorScheme="blue">
            {tag}
          </Tag>
        ))}
      </HStack>
    </GridItem>
  );
};

export default Tags;
