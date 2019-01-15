import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import Logo from '../../atoms/logo';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline">
          <Logo />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.displayName = 'Header';
