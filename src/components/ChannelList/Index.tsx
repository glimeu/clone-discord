import React from 'react';

import ChannelButton from '../ChannelButton/Index';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="csgo" select />
      <ChannelButton channelName="valorant" />
    </Container>
  );
}

export default ChannelList;