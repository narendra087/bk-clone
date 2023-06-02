import React, { useEffect, useState } from 'react'
import { NavLink as ReactLink, useLocation, useParams } from 'react-router-dom';
import { Box, Flex, Input, InputGroup, InputRightAddon, Image, Grid, GridItem, Text, Stack } from '@chakra-ui/react';

import priceFormatter from '../utils/priceFormatter';

import search from '../images/search.png'

import MenuFilterComponent from '../components/MenuFilterComponent';

import paketList from '../mocks/paket';

interface PaketType {
  name: string
  slug: string
  image: string
  price: string
  category: string
}

const MenuPage = () => {
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
      <Flex p='25px 15px' w={{base:'100%', lg:'990px'}} m='0 auto' justifyContent='center'>
        <Flex flexDirection={{base: 'column', lg:'row'}} gap='30px' w='100%' justifyContent='space-between'>
          <MenuFilterComponent />
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