import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FC } from 'react';
import { ViewpointThemeOptions } from './theme';
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

export type ThemeProviderWrapperProps = Omit<ThemeProviderProps, 'theme'>;

const ThemeProviderWrapper: FC<ThemeProviderWrapperProps> = ({ children }) => {
  const localTheme = createTheme(ViewpointThemeOptions);
  return <ThemeProvider theme={localTheme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
