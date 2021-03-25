import React from 'react';
import { GridItem, Image } from '@chakra-ui/react';

const Avatar = ({ picture }) => {
  return (
    <GridItem gridArea="avatar" alignItems="center">
      <Image borderRadius="full" objectFit="cover" src={picture} />
    </GridItem>
  );
};

export default Avatar;
