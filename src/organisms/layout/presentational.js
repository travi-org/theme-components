import React from 'react';
import {node} from 'prop-types';
import {CssBaseline} from '@material-ui/core';
import Header from '../../molecules/header';

export default function Layout({children}) {
  return (
    <div>
      <CssBaseline />
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: node
};
