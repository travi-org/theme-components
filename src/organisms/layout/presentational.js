import React from 'react';
import {node} from 'prop-types';
import {Reboot} from 'material-ui';
import Header from '../../molecules/header';

export default function Layout({children}) {
  return (
    <div>
      <Reboot />
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: node
};
