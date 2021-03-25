import React from 'react';
import { Box, Container, Grid } from '@chakra-ui/react';

import Avatar from './Avatar';
import Author from './Author';
import Message from './Message';
import Metadata from './Metadata';
import Tags from './Tags';

const Post = ({ post }) => {
  return (
    <Box border="1px" borderColor="blue.200" borderRadius="md" p={5} my={8}>
      <Container maxW="container.md">
        <Grid
          templateRows="repeat(3, auto) 50px"
          templateColumns="repeat(5, 1fr)"
          templateAreas=" 'avatar message message message message'
                          'author message message message message'
                          'metadata metadata metadata metadata metadata'
                          'tags tags tags tags tags'"
          gap={4}
        >
          <Avatar picture={post.owner.picture} />
          <Author authorInfo={post.owner} />
          <Message message={post} />
          <Metadata metadata={post} />
          <Tags tags={post.tags} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Post;
