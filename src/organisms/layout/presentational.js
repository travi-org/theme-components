import React from 'react';
import {bool, func, node} from 'prop-types';
import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {useMediaQuery} from '../../../thirdparty-wrappers/material-ui';
import Header from '../../molecules/header';
import NavigationDrawer from '../../molecules/navigation';
import createTheme from '../../theme';

export default function Layout({children, navigationOpen, onNavigationDrawerToggle}) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <ThemeProvider theme={createTheme(prefersDarkMode ? 'dark' : 'light')}>
      <CssBaseline />
      <div css={{display: 'flex'}}>
        <Header onNavigationDrawerToggle={onNavigationDrawerToggle} />
        <NavigationDrawer open={navigationOpen} onToggle={onNavigationDrawerToggle} />
        <main id="main-content" css={{marginLeft: 0}}>
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: node.isRequired,
  navigationOpen: bool,
  onNavigationDrawerToggle: func.isRequired
};
