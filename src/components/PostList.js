import React from 'react';
import { VStack } from '@chakra-ui/react';

import Post from './Post';

const PostList = () => {
  const users = [
    {
      id: '0F8JIqi4zwvb77FGz6Wt',
      lastName: 'Fiedler',
      firstName: 'Heinz-Georg',
      email: 'heinz-georg.fiedler@example.com',
      title: 'mr',
      picture: 'https://randomuser.me/api/portraits/men/81.jpg',
    },
    {
      id: '0P6E1d4nr0L1ntW8cjGU',
      picture: 'https://randomuser.me/api/portraits/women/74.jpg',
      lastName: 'Hughes',
      email: 'katie.hughes@example.com',
      title: 'miss',
      firstName: 'Katie',
    },
    {
      id: '1Lkk06cOUCkiAsUXFLMN',
      title: 'mr',
      lastName: 'Aasland',
      firstName: 'Vetle',
      picture: 'https://randomuser.me/api/portraits/men/97.jpg',
      email: 'vetle.aasland@example.com',
    },
    {
      id: '1OuR3CWOEsfISTpFxsG7',
      picture: 'https://randomuser.me/api/portraits/men/66.jpg',
      lastName: 'Vasquez',
      email: 'dylan.vasquez@example.com',
      title: 'mr',
      firstName: 'Dylan',
    },
    {
      id: '1pRsh5nXDIH3pjEOZ17A',
      lastName: 'Vicente',
      title: 'miss',
      firstName: 'Margarita',
      email: 'margarita.vicente@example.com',
      picture: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
      id: '3JAf8R85oIlxXd58Piqk',
      email: 'joey.oliver@example.com',
      title: 'mr',
      firstName: 'Joey',
      lastName: 'Oliver',
      picture: 'https://randomuser.me/api/portraits/men/61.jpg',
    },
  ];

  return (
    <VStack spacing={8}>
      {users.map(user => (
        <Post user={user} />
      ))}
    </VStack>
  );
};

export default PostList;
