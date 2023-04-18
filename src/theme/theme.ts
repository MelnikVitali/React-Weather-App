import { ThemeOptions } from '@mui/material/styles';

export const chartColors = {
  blue: '#1B9DB7',
  green: '#7FBC42',
  errorTextColor: '#d32f2f',
  errorBgColor: '#F9E7EB',
  textFieldColor: '#797979',
  textFieldBorderColor: '#c0c3d1',
  procedureTitleColor: '#0F426C',
  blueColorTitles: '#214774',
  blueColorBorderTab: '#214871',
  blueColorButtons: '#224974',
  secondaryTextColor: '#000',
  disabledTextColor: '#797979',
  secondaryBlueLight: '#4081d6',
  blackColorTitles: '#000000',
};

export const ViewpointThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: '#3C7BAF ',
      light: '#1B9DB7',
    },
    secondary: {
      main: '#224974',
      light: '#3C7BAF',
    },
    text: {
      // disabled: '#797979',
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: '0px',
          color: '#d32f2f !important',
          '&.Mui-disabled': {
            color: '#d32f2f',
          },
        },
      },
    },
  },
};
