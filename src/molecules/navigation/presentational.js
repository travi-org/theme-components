import React from 'react';
import {bool, func} from 'prop-types';
import {Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {ChevronRight, Home, Dvr} from '@material-ui/icons';

export default function NavigationDrawer({open, onToggle}) {
  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <IconButton onClick={onToggle}><ChevronRight /></IconButton>
      <Divider />
      <nav>
        <List>
          <ListItem button>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><Dvr /></ListItemIcon>
            <ListItemText primary="Presentations" />
          </ListItem>
        </List>
      </nav>
    </Drawer>
  );
}

NavigationDrawer.propTypes = {
  open: bool,
  onToggle: func.isRequired
};
