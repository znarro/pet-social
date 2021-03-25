import React, { useState, useEffect } from 'react';
import { Grid, VStack } from '@chakra-ui/react';

import Post from './Post';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '605c9ae75fafe74e302a1bbf';

const PostList = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${BASE_URL}/post`, {
        headers: { 'app-id': APP_ID },
      });
      const { data } = await response.json();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <div>
          {posts && posts.map(post => <Post post={post} key={post.id} />)}
        </div>
      </VStack>
    </Grid>
  );
};

export default PostList;
