import React from 'react';
import { ChakraProvider, Box, Grid, Heading, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import PostList from './components/PostList';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Heading my={5}>Pet Social</Heading>
          <PostList />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
