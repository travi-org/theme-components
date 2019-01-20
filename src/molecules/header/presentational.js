import React from 'react';
import {bool, func, shape, string} from 'prop-types';
import {AppBar, IconButton, Toolbar, Typography, withStyles} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';
import classNames from 'classnames';
import Logo from '../../atoms/logo';
import {drawerWidth} from '../navigation/styles';

function styles(theme) {
  return ({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    }
  });
}

export function Header({navigationOpen, onNavigationDrawerToggle, classes}) {
  return (
    <AppBar position="fixed" className={classNames(classes.appBar, {[classes.appBarShift]: navigationOpen})}>
      <Toolbar disableGutters={!navigationOpen}>
        {!navigationOpen && (
          <IconButton
            color="inherit"
            aria-label="Open navigation drawer"
            onClick={onNavigationDrawerToggle}
            css={{marginLeft: 12, marginRight: 20}}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography component="h1" variant="h5">
          <a href="https://matt.travi.org" css={{textDecoration: 'none'}}>
            <Logo />
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.displayName = 'Header';
Header.propTypes = {
  navigationOpen: bool,
  onNavigationDrawerToggle: func.isRequired,
  classes: shape({appBar: string, appBarShift: string})
};
Header.defaultProps = {classes: {}};

export default withStyles(styles, {withTheme: true})(Header);
