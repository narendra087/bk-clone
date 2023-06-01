import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './font.css';
import App from './App';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { BrowserRouter as Router } from "react-router-dom";

const theme = extendTheme({
  colors: {
    primary: {
      main: '#ED7801',
      100: '#FAAF18',
      200: '#F1BC87',
    },
    background: {
      paper: '#FFF',
      dark: '#2D2D2D',
      secondary: '#404040'
    },
    text: {
      main: '#8B542F',
      subtitle: '#FAAF18',
      secondary: '#919191',
      white: '#FFF',
    }
  },
  fonts: {
    regular: `"Flame-Regular", sans-serif`,
    bold: `"Flame-Bold", sans-serif`,
  },
  components: {
    Link: {
      baseStyle: {
        '&:hover': { textDecoration: 'none' },
      }
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
