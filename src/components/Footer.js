import React from 'react';

import { Center, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Center bg="blue.100" h="100px" color="black" marginTop={5}>
      <Text fontSize="md">&copy; Zamir Narro - 2021</Text>
    </Center>
  );
};

export default Footer;
