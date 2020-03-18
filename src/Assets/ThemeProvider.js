import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
        light:"#4791db",
        main: "#1976d2",
        dark:"#115293",
      },
      secondary: {
        
        main: '#dc004e',
      },
      warning:{
          main:"#ff9800",
      },
      error:{
          main:"#f44336",
        
      },
      success:{
          main:"#4caf50"
      }
    },
  });

  