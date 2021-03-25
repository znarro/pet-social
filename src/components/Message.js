import React from 'react';
import { GridItem, Text, Link, Image } from '@chakra-ui/react';

const Message = ({ message }) => {
  return (
    <GridItem gridArea="message">
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
    </GridItem>
  );
};

export default Message;
