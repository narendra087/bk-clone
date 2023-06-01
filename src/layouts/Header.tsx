import React, { useEffect } from 'react'
import { Box, Flex, Link, Image, Text, Popover, PopoverTrigger, PopoverContent, PopoverBody, Button, PopoverArrow, Badge, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack, Divider } from '@chakra-ui/react'
import { Link as ReactLink, useLocation } from 'react-router-dom'

import logo from '../images/bk-logo.png'
import cart from '../images/cart.png'
import close from '../images/close.png'
import burgerStrip from '../images/burger-strip.png'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { pathname } = useLocation()
  
  useEffect(() => {
    if (isOpen) {
      onClose()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  
  return (
    <>
      <Box h={{base: '50px', lg:'76px'}} zIndex='2000' position='relative' w='100%' bg='background.dark' boxShadow='0px 0px 10px 1px rgba(0,0,0,0.5)'>
        <Flex justifyContent={{base: 'center', lg:'space-between'}} alignItems='center' w={{ base: '100%', lg: '960px' }} m='0 auto' position='relative'>
          
          <Link as={ReactLink} to='/' position={{ base: 'relative', lg:'absolute'}} left={{base: 'unset', lg: '-125px'}} top={{base: '5px', lg:'10px'}}>
            <Image src={logo} w={{base: '40px', lg: '90px'}} h={{base: '40px', lg: '90px'}} zIndex={1000} position='relative'></Image>
          </Link>
          
          <Box onClick={() => {isOpen ? onClose() : onOpen()}} display={{base:'block', lg:'none'}} p='12px 15px' position='absolute' top='0' left='0' w='50px' h='50px'>
            <Image src={isOpen ? close : burgerStrip} w='25px' h='25px' objectFit='cover'></Image>
          </Box>
          
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
          <Popover trigger='hover' placement='bottom-end'>
            <PopoverTrigger>
              <Flex cursor='pointer' bg='primary.main' h={{base:'50px' , lg:'76px'}} w={{base:'52px' , lg:'59px'}} position='absolute' right={{base: '0', lg: '-100px'}} top='0' justifyContent='center' alignItems='center'>
                <Image src={cart} w='30px' h='30px'></Image>
                <Badge
                  bg='red'
                  color='white'
                  borderRadius='100%'
                  position='absolute'
                  top={{base:'5px', lg:'13px'}}
                  right={{base:'5px', lg:'10px'}}
                  w='21px'
                  h='20px'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  fontFamily='Flase-Sans'
                  fontSize='14px'
                >
                  0
                </Badge>
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <Box p='17px 8px' maxW='430px' w='100%'>
                  <Text variant='sans' color='black'>Your cart is empty.</Text>
                  <Button as={ReactLink} to='/menus' variant='primary' mt='25px' w='100%'>Order Now</Button>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Box>
      
      <Drawer onClose={onClose} isOpen={isOpen} size='full' placement='top'>
        <DrawerOverlay top='50px!important' />
        <DrawerContent top='50px!important'>
          <DrawerBody bg='background.dark' p='40px 20px'>
            <Stack spacing='30px'>
              <Text color='text.white' fontSize='32px' as={ReactLink} to='/' >Home</Text>
              <Box as={ReactLink} to='/menus'>
                <Text color='text.subtitle' fontSize='15px' lineHeight={1}>Delivery</Text>
                <Text color='text.white' fontSize='32px' lineHeight={1} mt='5px'>Order</Text>
              </Box>
              <Box as={ReactLink} to='/news-v1'>
                <Text color='text.subtitle' fontSize='15px' lineHeight={1}>Get Fresh</Text>
                <Text color='text.white' fontSize='32px' lineHeight={1} mt='5px'>Promotions</Text>
              </Box>
              <Divider color='text.white' mt='20px'></Divider>
              <Text color='text.white' fontSize='25px' as={ReactLink} to='/login' >Login</Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header