import React, { useEffect, useState } from 'react'
import { NavLink as ReactLink, useLocation, useParams } from 'react-router-dom';
import { Box, Flex, Input, InputGroup, InputRightAddon, Image, Grid, GridItem, Text, Stack } from '@chakra-ui/react';

import priceFormatter from '../utils/priceFormatter';

import search from '../images/search.png'

import paketList from '../mocks/paket';

interface PaketType {
  name: string
  slug: string
  image: string
  price: string
  category: string
}

const MenuPage = () => {
  const arrLinks = [
    {name: 'King`s Chicken [Rasa Baru]', slug: 'kings-chicken-rasa-baru'},
    {name: 'Special Menu', slug: 'special-menu'},
    {name: 'Tropical Whopper [Limited Time]', slug: 'tropical-whopper-limited-time'},
    {name: 'BK APP EXCLUSIVE', slug: 'bk-app-exclusive'},
    {name: 'Cheese Burger Favorit', slug: 'cheese-burger-favorit'},
    {name: 'Cheese Whopper', slug: 'cheese-whopper'},
    {name: 'Gold Collection', slug: 'gold-collection'},
    {name: 'Kids Meal', slug: 'kids-meal'},
    {name: 'Side & Dessert', slug: 'side-dessert'},
    {name: 'BEVERAGES', slug: 'beverages'},
    {name: 'KING DEALS', slug: 'king-deals'},
  ]
  
  const [arrPaket, setArrPaket] = useState<PaketType[]>([])
  
  const { pathname } = useLocation();
  const params = useParams()
  
  useEffect(() => {
    handleList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])
  
  
  const handleList = () => {
    const filter = params["*"] || 'kings-chicken-rasa-baru'
    const tempArr = paketList.filter((paket:PaketType) => paket.category === filter)
    
    setArrPaket(tempArr)
  }
  
  return (
    <Box
      backgroundImage='url(/background.jpg) !important'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundAttachment='fixed'
      backgroundSize='cover'
      minH='100vh'
    >
      <Flex py='25px' w={{base:'100%', lg:'990px'}} m='0 auto' justifyContent='center'>
        <Flex flexDirection={{base: 'column', lg:'row'}} gap='30px' w='100%' justifyContent='space-between' mx='15px'>
          <Box w='202px' minW='202px'>
            <InputGroup bg='white' borderRadius='10px' boxShadow='1px 1px 8px -2px rgba(107,107,107,0.3)' mb='30px'>
              <Input fontFamily='Flame-Sans' placeholder='Search menu...' _placeholder={{color:'text.placeholder'}} />
              <InputRightAddon cursor='pointer' bg='primary.main' children={<Image src={search} w='16px' h='16px' />} />
            </InputGroup>
            
            <Stack spacing='10px'>
              {
                arrLinks.map((link, index) => (
                  <Flex
                    as={ReactLink}
                    to={'/menus/'+link.slug}
                    p='7px 20px 9px'
                    w='100%'
                    minH='56px'
                    bg={(pathname === '/menus' && index === 0) || (pathname === '/menus/' + link.slug) ? 'primary.100' : 'primary.300'}
                    borderRadius='10px'
                    alignItems='center'
                  >
                    <Text color='text.main3' fontSize='18px'>{link.name}</Text>
                  </Flex>
                ))
              }
            </Stack>
          </Box>
          <Grid templateColumns={{base: '1fr', lg:'repeat(2, 1fr)'}} gap='15px' w='100%' h={'max-content'}>
            { arrPaket.map((paket, index) => (
              <GridItem
                as={ReactLink}
                key={index}
                to={'/product/' + paket.slug}
                p='20px'
                w='100%'
                h='max-content'
                boxShadow='2px 2px 15px -4px #6b6b6b'
                borderRadius='10px'
                bg='white'
              >
                <Image src={`/paket/${paket.image}.jpg`} w='100%' objectFit='cover'></Image>
                <Text color='text.main' fontSize='23px' mt='5px'>{paket.name}</Text>
                <Text color='text.main' fontSize='17px'>{priceFormatter(paket.price)}</Text>
              </GridItem>
            ))
            }
          </Grid>
        </Flex>
      </Flex>
    </Box>
  )
}

export default MenuPage