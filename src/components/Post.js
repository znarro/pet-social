import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Heading,
} from '@chakra-ui/react';

const Post = ({ user }) => {
  return (
    <Box border="1px" borderColor="gray.200" borderRadius="md" p={5}>
      <Container maxW="container.md">
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr) 50px"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} alignItems="center">
            <Image
              borderRadius="full"
              objectFit="cover"
              src={user.picture}
              alt={user.lastName}
            />
          </GridItem>
          <GridItem colSpan={3} bg="papayawhip">
            <Heading as="h2" size="md">
              {`${user.title}. ${user.firstName}${user.lastName}`}
            </Heading>
          </GridItem>
          <GridItem colSpan={3} bg="papayawhip">
            Comment
          </GridItem>
          <GridItem colSpan={4} bg="tomato">
            Tags
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Post;
