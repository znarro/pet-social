import React, { useState, useEffect } from 'react';
import { Grid, VStack } from '@chakra-ui/react';

import Post from './Post';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '605c9ae75fafe74e302a1bbf';

const PostList = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${BASE_URL}/user`, {
        headers: { 'app-id': APP_ID },
      });
      const { data } = await response.json();
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <div>
          {users && users.map(user => <Post user={user} key={user.id} />)}
        </div>
      </VStack>
    </Grid>
  );
};

export default PostList;
