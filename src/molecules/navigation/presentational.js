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
import {ChevronLeft, Dvr as PresentationsIcon, Home, MailOutline as ContactIcon} from '@material-ui/icons';
import travi from 'travi';
import {styles} from './styles';

export function NavigationDrawer({open, onToggle, classes}) {
  return (
    <SwipeableDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onOpen={onToggle}
      onClose={onToggle}
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
          <ListItemIcon><PresentationsIcon /></ListItemIcon>
          <ListItemText primary="Presentations" />
        </ListItem>
        <ListItem button component="a" href="https://matt.travi.org/contact">
          <ListItemIcon><ContactIcon /></ListItemIcon>
          <ListItemText primary="Contact" />
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
