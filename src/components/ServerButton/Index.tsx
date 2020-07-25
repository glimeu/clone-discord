import React from 'react';

import { Button } from './styles';
import Logo from '../../assets/Logo.svg';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions
}) => {
  return (
    <Button
      selected={selected}
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className=""
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  );
}

export default ServerButton;