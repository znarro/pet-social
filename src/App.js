import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import PostList from './components/PostList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <PostList />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
