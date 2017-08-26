import React from 'react';
import {AppBar, Toolbar, Typography} from 'material-ui';
import Logo from '../../atoms/logo';

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography type="headline"><Logo /></Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.displayName = 'Header';
