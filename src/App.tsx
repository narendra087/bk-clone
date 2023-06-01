import React from 'react';
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import { Routes, Route, Link as ReactLink } from 'react-router-dom';

import HomePage from './pages/HomePage';

import logo from './images/bk-logo.png'
import cart from './images/cart.png'
import phone from './images/phone.png'
import email from './images/email.png'
import fb from './images/fb.png'
import ig from './images/ig.png'
import twitter from './images/twitter.png'
import yt from './images/yt.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <Box h={{base: '50px', lg:'76px'}} w='100%' bg='background.dark'>
          <Flex justifyContent={{base: 'center', lg:'space-between'}} alignItems='center' w={{ base: '100%', lg: '960px' }} m='0 auto' position='relative'>
            
            <Link as={ReactLink} to='/' position={{ base: 'relative', lg:'absolute'}} left={{base: 'unset', lg: '-125px'}} top={{base: '5px', lg:'10px'}}>
              <Image src={logo} w={{base: '40px', lg: '90px'}} h={{base: '40px', lg: '90px'}} zIndex={1000} position='relative'></Image>
            </Link>
            
            <Flex display={{ base: 'none', lg: 'flex' }} alignItems='center'>
              <Link as={ReactLink} to='/menus'>
                <Box p='19px 40px 19px 0'>
                  <Text color='text.subtitle' fontSize='13px' lineHeight={1}>Delivery</Text>
                  <Text color='text.white' fontSize='25px' lineHeight={1} variant='bold' mt='3px'>Order</Text>
                </Box>
              </Link>
              <Link as={ReactLink} to='/news-v1'>
                <Box p='19px 40px 19px 0'>
                  <Text color='text.subtitle' fontSize='13px' lineHeight={1}>Get Fresh</Text>
                  <Text color='text.white' fontSize='25px' lineHeight={1} variant='bold' mt='3px'>Promotions</Text>
                </Box>
              </Link>
            </Flex>
            
            <Link as={ReactLink} to='/login' color='text.white' display={{ base: 'none', lg: 'block' }} fontSize='xl' lineHeight={1}>
              LOGIN
            </Link>
            <Flex bg='primary.main' h={{base:'50px' , lg:'76px'}} w={{base:'52px' , lg:'59px'}} position='absolute' right={{base: '0', lg: '-100px'}} top='0' justifyContent='center' alignItems='center'>
              <Image src={cart} w='30px' h='30px'></Image>
            </Flex>
          </Flex>
        </Box>
      </header>
      
      <Box>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Box>
      
      <footer>
        <Box h={{base:'auto', lg:'125px'}} w='100%' bg='background.dark'>
          <Flex flexDirection='column' w={{base: '100%', lg: '960px'}} m='0 auto' p='12px 0' gap='10px'>
            <Text color='text.white' fontSize={{base: '25px' ,lg: 'xl'}} textAlign={{base: 'center', lg: 'left'}}>BURGER KING® DELIVERY</Text>
            <Flex direction={{ base: 'column', lg: 'row' }} gap={{base: '10px', lg: '30px'}} alignItems='center'>
              <Flex gap={{base:'10px', sm: '30px'}} flexDirection={{base: 'column', sm: 'row'}}>
                <Flex as={ReactLink} to='tel:1500025' alignItems='center' justifyContent='center' gap='5px'>
                  <Image src={phone} w={{base: '24px', lg:'16px'}} h={{base: '24px', lg:'16px'}} />
                  <Text color='text.white' fontSize={{ base:'28px', lg:'lg'}}>15000 25</Text>
                </Flex>
                <Flex as={ReactLink} to='mailto:guestservice@burgerking.co.id' alignItems='center' justifyContent='center' gap='5px'>
                  <Image src={email} w={{base: '24px', lg:'16px'}} h={{base: '24px', lg:'16px'}} />
                  <Text color='text.white' fontSize='15px' fontFamily='sans-serif' fontWeight='600'>guestservice@burgerking.co.id</Text>
                </Flex>
              </Flex>
              <Flex gap={{base: '15px', lg: '5px'}} m={{base: '10px 0 30px', lg: '0'}}>
                <Link as={ReactLink} to='https://www.facebook.com/burgerkingindonesia/'><Image src={fb} w={{ base: '24px', lg:'16px'}} h={{ base: '24px', lg:'16px'}} /></Link>
                <Link as={ReactLink} to='https://www.instagram.com/burgerking.id/'><Image src={ig} w={{ base: '24px', lg:'16px'}} h={{ base: '24px', lg:'16px'}} /></Link>
                <Link as={ReactLink} to='https://twitter.com/burgerking_id'><Image src={twitter} w={{ base: '24px', lg:'16px'}} h={{ base: '24px', lg:'16px'}} /></Link>
                <Link as={ReactLink} to='https://www.youtube.com/channel/UC-F_fh9CRDwhJrY_ibHae-g'><Image src={yt} w={{ base: '24px', lg:'16px'}} h={{ base: '24px', lg:'16px'}} /></Link>
              </Flex>
            </Flex>
            <Flex gap='10px' flexDirection={{ base: 'column', lg:'row' }} textAlign={{ base: 'center', lg:'left' }} mx={{base: '40px', lg: '0'}}>
              <Link
                to='/about-us'
                as={ReactLink}
                pr='10px'
                fontFamily='Flame-Sans'
                fontSize='15px'
                color={{
                  base: 'text.white',
                  lg: 'text.secondary'
                }}
                _hover={{color:'text.white'}}
                borderRight={{
                  base: 'none',
                  lg: '1px solid #8a8a8a'
                }}
              >
                About Us
              </Link>
              <Link
                to='/privacy-policy'
                as={ReactLink}
                pr='10px'
                fontFamily='Flame-Sans'
                fontSize='15px'
                color={{
                  base: 'text.white',
                  lg: 'text.secondary'
                }}
                _hover={{color:'text.white'}}
                borderRight={{
                  base: 'none',
                  lg: '1px solid #8a8a8a'
                }}
              >
                Kebijakan Privasi
              </Link>
              <Link
                to='/terms-and-conditions'
                as={ReactLink}
                pr='10px'
                fontFamily='Flame-Sans'
                fontSize='15px'
                color={{
                  base: 'text.white',
                  lg: 'text.secondary'
                }}
                _hover={{color:'text.white'}}
                borderRight={{
                  base: 'none',
                  lg: '1px solid #8a8a8a'
                }}
              >
                Syarat dan Ketentuan
              </Link>
              <Text
                color='text.secondary'
                fontFamily='Flame-Sans'
                fontSize='15px'
              >
                TM & © 2023 Burger King Corporation. Used Under License. All rights reserved.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </footer>
    </div>
  );
}

export default App;
