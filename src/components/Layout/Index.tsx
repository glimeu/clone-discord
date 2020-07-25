import React from 'react';

import { Grid } from './styles';
import ServerList from '../ServerList/Index';
import ServerName from '../ServerName/Index';
import ChannelInfo from '../ChannelInfo/Index';
import ChannelList from '../ChannelList/Index';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
    </Grid>
  );
}

export default Layout;