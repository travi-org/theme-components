import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import Logo from '../../atoms/logo';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline">
          <a href="https://matt.travi.org" css={{textDecoration: 'none'}}>
            <Logo />
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.displayName = 'Header';
