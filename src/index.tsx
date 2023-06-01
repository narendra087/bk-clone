import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './font.css';
import App from './App';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { BrowserRouter as Router } from "react-router-dom";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'background.paper',
        fontFamily: '"Flame-Regular", sans-serif'
      }
    }
  },
  breakpoints: {
    lg: '1024px',
  },
  colors: {
    primary: {
      main: '#ED7801',
      100: '#FAAF18',
      200: '#F1BC87',
    },
    background: {
      paper: '#F9F4F2',
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
    },
    Button: {
      variants: {
        primary: {
          background: 'primary.main',
          color: 'text.white',
        }
      },
    },
    Text: {
      variants: {
        bold: {
          fontFamily: '"Flame-Bold", sans-serif'
        }
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
