import {createMuiTheme} from '@material-ui/core';

// palette generated at http://mcg.mbitson.com/ from #c80000
export default function createTheme() {
  return createMuiTheme({
    typography: {
      useNextVariants: true
    },
    palette: {
      primary: {
        50: '#f8e0e0',
        100: '#efb3b3',
        200: '#e48080',
        300: '#d94d4d',
        400: '#d02626',
        500: '#c80000',
        600: '#c20000',
        700: '#bb0000',
        800: '#b40000',
        900: '#a70000',
        A100: '#ffd1d1',
        A200: '#ff9e9e',
        A400: '#ff6b6b',
        A700: '#ff5252',
        contrastDefaultColor: 'light',
        contrastDarkColors: [
          '50',
          '100',
          '200',
          'A100',
          'A200',
          'A400',
          'A700'
        ],
        contrastLightColors: [
          '300',
          '400',
          '500',
          '600',
          '700',
          '800',
          '900'
        ]
      }
    }
  });
}
