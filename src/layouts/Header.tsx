import React from 'react'
import { Box, Flex, Link, Image, Text, Popover, PopoverTrigger, PopoverContent, PopoverBody, Button, PopoverArrow, Badge } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

import logo from '../images/bk-logo.png'
import cart from '../images/cart.png'

const Header = () => {
  return (
    <Box h={{base: '50px', lg:'76px'}} w='100%' bg='background.dark' boxShadow='0px 0px 10px 1px rgba(0,0,0,0.5)'>
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
        <Popover trigger='hover' placement='bottom-end'>
          <PopoverTrigger>
            <Flex cursor='pointer' bg='primary.main' h={{base:'50px' , lg:'76px'}} w={{base:'52px' , lg:'59px'}} position='absolute' right={{base: '0', lg: '-100px'}} top='0' justifyContent='center' alignItems='center'>
              <Image src={cart} w='30px' h='30px'></Image>
              <Badge
                bg='red'
                color='white'
                borderRadius='100%'
                position='absolute'
                top='13px'
                right='10px'
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
  )
}

export default Header