import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      main: '#ED7801',
      100: '#FAAF18',
      200: '#F1BC87',
    },
    background: {
      paper: '#FFF',
      secondary: '#404040'
    },
    text: {
      main: '#8B542F',
      secondary: '#919191'
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
