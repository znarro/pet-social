import React from 'react';
import { GridItem, Flex, Text, Link, Image } from '@chakra-ui/react';

const Message = ({ message }) => {
  return (
    <GridItem gridArea="message">
      <Flex flexDirection="column" alignItems="center">
        <Text>
          {message.text[0].toUpperCase() + message.text.slice(1)}.{' '}
          <Link href={message.link}>Visit link</Link>
        </Text>

        <Image
          objectFit="cover"
          boxSize="200px"
          src={message.image}
          alt={message.text}
        />
      </Flex>
    </GridItem>
  );
};

export default Message;
