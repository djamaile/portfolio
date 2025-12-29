import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useColorMode } from '@docusaurus/theme-common';
import { lightTheme, darkTheme } from './muiTheme';

interface MuiThemeWrapperProps {
  children: React.ReactNode;
}

export const MuiThemeWrapper: React.FC<MuiThemeWrapperProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  const theme = colorMode === 'dark' ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  );
};
