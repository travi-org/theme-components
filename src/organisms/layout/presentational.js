import React from 'react';
import {node} from 'prop-types';
import {CssBaseline, MuiThemeProvider} from '@material-ui/core';
import Header from '../../molecules/header';
import {theme} from '../..';

export default function Layout({children}) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <section>
        {children}
      </section>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: node
};
