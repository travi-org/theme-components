/* eslint import/prefer-default-export: off */
export function styles(theme) {
  return ({
    paper: {width: 240},
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    }
  });
}
