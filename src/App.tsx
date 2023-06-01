import React from 'react';
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';

import logo from './images/bk-logo.png'
import cart from './images/cart.png'
import { Link as ReactLink } from 'react-router-dom';

import CarouselComponent from './components/CarouselComponent';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Box h='76px' w='100%' bg='background.dark'>
          <Flex justifyContent='space-between' alignItems='center' maxW='960px' m='0 auto' position='relative'>
            
            <Link as={ReactLink} to='/' position='absolute' left='-125px' top='10px'>
              <Image src={logo} w='90px' h='90px' zIndex={1000} position='relative'></Image>
            </Link>
            
            <Flex alignItems='center'>
              <Link as={ReactLink} to='/menus'>
                <Box p='19px 40px 19px 0'>
                  <Text color='text.subtitle' fontSize='13px' lineHeight={1} fontFamily='regular'>Delivery</Text>
                  <Text color='text.white' fontSize='25px' lineHeight={1} fontFamily='bold' mt='3px'>Order</Text>
                </Box>
              </Link>
              <Link as={ReactLink} to='/news-v1'>
                <Box p='19px 40px 19px 0'>
                  <Text color='text.subtitle' fontSize='13px' lineHeight={1} fontFamily='regular'>Get Fresh</Text>
                  <Text color='text.white' fontSize='25px' lineHeight={1} fontFamily='bold' mt='3px'>Promotions</Text>
                </Box>
              </Link>
            </Flex>
            
            <Link as={ReactLink} to='/login' color='text.white' fontSize='xl' lineHeight={1} fontFamily='regular'>
              LOGIN
            </Link>
            <Flex bg='primary.main' h='76px' w='59px' position='absolute' right='-100px' justifyContent='center' alignItems='center'>
              <Image src={cart} w='30px' h='30px'></Image>
            </Flex>
          </Flex>
        </Box>
      </header>
      <Box>
        <CarouselComponent />
      </Box>
    </div>
  );
}

export default App;
