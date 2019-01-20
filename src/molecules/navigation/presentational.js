import React from 'react';
import {bool, func, shape, string} from 'prop-types';
import {Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, withStyles} from '@material-ui/core';
import {ChevronLeft, Dvr, Home} from '@material-ui/icons';
import {drawerWidth, styles} from './styles';

export function NavigationDrawer({open, onToggle, classes}) {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      css={{width: drawerWidth, flexShrink: 0}}
      classes={{paper: classes.paper}}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onToggle}><ChevronLeft /></IconButton>
      </div>
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
  onToggle: func.isRequired,
  classes: shape({paper: string, drawerHeader: string})
};
NavigationDrawer.defaultProps = {classes: {}};

export default withStyles(styles, {withTheme: true})(NavigationDrawer);
