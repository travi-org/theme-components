import React from 'react';
import {func} from 'prop-types';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';
import travi from 'travi';
import Logo from '../../atoms/logo';

export default function Header({onNavigationDrawerToggle}) {
  return (
    <AppBar position="fixed">
      <Toolbar disableGutters>
        <IconButton
          color="inherit"
          aria-label="Open navigation drawer"
          onClick={onNavigationDrawerToggle}
          css={{marginLeft: 12, marginRight: 20}}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h5">
          <a href={travi.contact.website} css={{textDecoration: 'none'}}>
            <Logo />
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.displayName = 'Header';
Header.propTypes = {
  onNavigationDrawerToggle: func.isRequired
};
