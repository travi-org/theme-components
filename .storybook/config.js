import {configure} from '@storybook/react';
import {useMediaQuery} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {addDecorator} from '@storybook/react';
import createTheme from '../src/theme';

const Wrapper = ({story}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <MuiThemeProvider theme={createTheme(prefersDarkMode ? 'dark' : 'light')}>
      {story()}
    </MuiThemeProvider>
  );
};

addDecorator(story => <Wrapper story={story} />);

configure(require.context('../src', true, /stories\.js$/), module);
