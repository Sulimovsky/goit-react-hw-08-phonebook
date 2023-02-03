import { grey, lightGreen, blueGrey, cyan } from '@mui/material/colors';

export const getDesignTokens = mode => {
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            common: {
              black: grey[800],
              white: grey[50],
            },
            primary: {
              main: lightGreen.A200,
            },
            secondary: {
              main: cyan.A700,
            },
            text: {
              primary: grey[800],
            },
          }
        : {
            common: {
              black: grey[800],
              white: grey[50],
            },
            primary: {
              main: blueGrey[600],
            },
            secondary: {
              main: blueGrey[700],
            },
            background: {
              default: grey[900],
            },
            text: {
              primary: grey[50],
            },
          }),
    },
  };
};
