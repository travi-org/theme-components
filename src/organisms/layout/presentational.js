import React from 'react';
import {func, node} from 'prop-types';
import {CssBaseline, MuiThemeProvider} from '@material-ui/core';
import Header from '../../molecules/header';
import {theme} from '../..';

export default function Layout({children, onNavigationDrawerToggle}) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header onNavigationDrawerToggle={onNavigationDrawerToggle} />
      <section>
        {children}
      </section>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: node.isRequired,
  onNavigationDrawerToggle: func.isRequired
};
