import React from 'react';
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Footer from './layouts/Footer';
import Header from './layouts/Header';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import RegisterPage from './pages/RegisterPage';
import MenuPage from './pages/MenuPage';
import ProductPage from './pages/ProductPage';

import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      
      <Box minH={{ base: 'calc(100vh - 50px)', lg: 'calc(100vh - 76px)' }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/menus/*' element={<MenuPage />} />
          <Route path='/product/:slug' element={<ProductPage />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
      </Box>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
