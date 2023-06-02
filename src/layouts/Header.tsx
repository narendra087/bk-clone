import React, { useEffect, useState } from 'react'
import { Box,
  Flex,
  Link,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  PopoverArrow,
  Badge,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Stack,
  Divider,
} from '@chakra-ui/react'
import { Link as ReactLink, useLocation } from 'react-router-dom'

import priceFormatter from '../utils/priceFormatter'

import { useSelector } from 'react-redux'

import logo from '../images/bk-logo.png'
import cart from '../images/cart.png'
import close from '../images/close.png'
import burgerStrip from '../images/burger-strip.png'

import { CartType } from '../types/global'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { pathname } = useLocation()
  
  const [ totalPrice, setTotalPrice ] = useState(0)
  
  const cartData = useSelector((state:any) => state.cart.cartData)
  
  useEffect(() => {
    if (isOpen) {
      onClose()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  
  useEffect(() => {
    let price = 0
    cartData.forEach((cart:CartType) => {
      price += cart.quantity * cart.price
    })
    
    setTotalPrice(price)
  }, [cartData])
  
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
          
          <Link
            as={ReactLink}
            to='/login'
            color='text.white'
            fontSize='xl'
            lineHeight={1}
            position={{base:'absolute', lg:'relative'}}
            right={{base:'70px', lg: 'unset'}}
            top={{base:'13px', lg: 'unset'}}
            textTransform={{lg:'uppercase'}}
          >
            Login
          </Link>
          <Popover isLazy trigger='hover' placement='bottom-end'>
            <PopoverTrigger>
              <Flex
                as={ReactLink}
                to={cartData?.length ? '/cart/preview' : '/menus'}
                cursor='pointer'bg='primary.main' h={{base:'50px' , lg:'76px'}} w={{base:'52px' , lg:'59px'}}
                position='absolute' right={{base: '0', lg: '-100px'}} top='0'
                justifyContent='center' alignItems='center'
              >
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
                  { cartData?.length || 0 }
                </Badge>
              </Flex>
            </PopoverTrigger>
            <PopoverContent w='430px'>
              <PopoverArrow />
              <PopoverBody display={{base:'none', lg:'block'}}>
                <Box p='17px 8px' maxW='430px' w='100%'>
                  { cartData?.length ? (
                    <>
                      { cartData.map((cart:CartType) => (
                        <Flex justifyContent='space-between' gap='15px' mb='15px' pb='15px' borderBottom='1px solid #B7B7B7' key={cart.slug}>
                          <Flex gap='10px'>
                            <Image src={`/paket/${cart.image}.jpg`} w='100px' objectFit='cover'></Image>
                            <Text variant={'sans'} color='text.subtitle2' fontSize='13px'>{ cart.name }</Text>
                          </Flex>
                          <Flex gap='20px'>
                            <Text variant={'sans'} color='text.subtitle2' fontSize='13px'>x{ cart.quantity }</Text>
                            <Text variant={'sans'} color='text.subtitle2' fontSize='13px'>{ priceFormatter(cart.price) }</Text>
                          </Flex>
                        </Flex>
                      ))}
                      <Flex justifyContent='space-between' alignItems='center'>
                        <Text variant='sans' color='text.subtitle2'>SUBTOTAL</Text>
                        <Text variant='sans' color='text.subtitle2' fontSize='23px'>{ priceFormatter(totalPrice) }</Text>
                      </Flex>
                    </>
                  ) : (
                    <Text variant='sans' color='black'>Your cart is empty.</Text>
                  )}
                  <Button
                    as={ReactLink}
                    to={cartData?.length ? '/cart/preview' : '/menus'}
                    variant='primary' mt='25px' w='100%'
                  >
                    {cartData?.length ? 'Go To Cart' : 'Order Now'}
                  </Button>
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