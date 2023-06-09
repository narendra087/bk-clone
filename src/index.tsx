import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './font.css';
import App from './App';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

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
      300: '#FBE6D6',
      400: '#FCEBD9'
    },
    background: {
      paper: '#F9F4F2',
      dark: '#2D2D2D',
      secondary: '#404040',
    },
    text: {
      main: '#8B542F',
      main2: '#ED7801',
      main3: '#502314',
      subtitle: '#FAAF18',
      subtitle2: '#404040',
      secondary: '#919191',
      white: '#FFF',
      placeholder: '#B7B7B7',
      inactive: '#C5A997'
    }
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
        },
        'primary-outline': {
          background: 'text.white',
          color: 'primary.main',
        },
        secondary: {
          background: 'primary.100',
          color: 'text.white',
        },
        inactive: {
          background: 'primary.400',
          color: 'text.inactive',
        },
      },
    },
    Text: {
      variants: {
        bold: {
          fontFamily: '"Flame-Bold", sans-serif'
        },
        sans: {
          fontFamily: '"Flame-Sans", sans-serif'
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
