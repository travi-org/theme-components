/* eslint import/prefer-default-export: off */
export const drawerWidth = 240;

export function styles(theme) {
  return ({
    paper: {width: drawerWidth},
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    }
  });
}
