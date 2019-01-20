import React from 'react';
import {bool, func, node} from 'prop-types';
import {CssBaseline, MuiThemeProvider} from '@material-ui/core';
import Header from '../../molecules/header';
import NavigationDrawer from '../../molecules/navigation';
import {theme} from '../..';

export default function Layout({children, navigationOpen, onNavigationDrawerToggle}) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header onNavigationDrawerToggle={onNavigationDrawerToggle} />
      <NavigationDrawer open={navigationOpen} onToggle={onNavigationDrawerToggle} />
      <section>
        {children}
      </section>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: node.isRequired,
  navigationOpen: bool,
  onNavigationDrawerToggle: func.isRequired
};
