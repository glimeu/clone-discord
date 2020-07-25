import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from '../ServerButton/Index';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3}/>
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications mentions={999}/>
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
}

export default ServerList;