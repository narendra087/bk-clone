import React from 'react';
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Footer from './layouts/Footer';
import Header from './layouts/Header';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      
      <Box minH={{ base: 'calc(100vh - 50px)', lg: 'calc(100vh - 76px)' }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Box>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
