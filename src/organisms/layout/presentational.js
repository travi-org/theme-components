import React from 'react';
import {bool, func, node, shape, string} from 'prop-types';
import {CssBaseline, withStyles} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import classNames from 'classnames';
import {useMediaQuery} from '../../../thirdparty-wrappers/material-ui';
import Header from '../../molecules/header';
import NavigationDrawer from '../../molecules/navigation';
import createTheme from '../../theme';
import {styles as drawerStyles} from '../../molecules/navigation/styles';

function styles(theme) {
  return ({
    ...drawerStyles(theme),
    content: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      //   marginLeft: -drawerWidth
      // },
      // contentShift: {
      //   transition: theme.transitions.create('margin', {
      //     easing: theme.transitions.easing.easeOut,
      //     duration: theme.transitions.duration.enteringScreen
      //   }),
      marginLeft: 0
    }
  });
}

export function Layout({children, navigationOpen, onNavigationDrawerToggle, classes}) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <ThemeProvider theme={createTheme(prefersDarkMode ? 'dark' : 'light')}>
      <CssBaseline />
      <div css={{display: 'flex'}}>
        <Header onNavigationDrawerToggle={onNavigationDrawerToggle} />
        <NavigationDrawer open={navigationOpen} onToggle={onNavigationDrawerToggle} />
        <main id="main-content" className={classNames(classes.content/* , {[classes.contentShift]: navigationOpen} */)}>
          <div className={classes.drawerHeader} />
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: node.isRequired,
  navigationOpen: bool,
  onNavigationDrawerToggle: func.isRequired,
  classes: shape({content: string, contentShift: string})
};
Layout.defaultProps = {classes: {}};

export default withStyles(styles, {withTheme: true})(Layout);
