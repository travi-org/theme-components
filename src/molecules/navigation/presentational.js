import React from 'react';
import {bool, func, shape, string} from 'prop-types';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  withStyles
} from '@material-ui/core';
import {ChevronLeft, Dvr, Home} from '@material-ui/icons';
import travi from 'travi';
import {drawerWidth, styles} from './styles';

export function NavigationDrawer({open, onToggle, classes}) {
  return (
    <SwipeableDrawer
      variant="persistent"
      anchor="left"
      open={open}
      onOpen={onToggle}
      onClose={onToggle}
      css={{width: drawerWidth, flexShrink: 0}}
      classes={{paper: classes.paper}}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onToggle}><ChevronLeft /></IconButton>
      </div>
      <Divider />
      <List component="nav">
        <ListItem button component="a" href={travi.contact.website}>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="https://presentations.travi.org">
          <ListItemIcon><Dvr /></ListItemIcon>
          <ListItemText primary="Presentations" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}

NavigationDrawer.propTypes = {
  open: bool,
  onToggle: func.isRequired,
  classes: shape({paper: string, drawerHeader: string})
};
NavigationDrawer.defaultProps = {classes: {}};

export default withStyles(styles, {withTheme: true})(NavigationDrawer);
