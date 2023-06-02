import React, { useEffect, useState } from 'react'
import { NavLink as ReactLink, useParams } from 'react-router-dom';
import { Box, Flex, Image, Grid, GridItem, Text } from '@chakra-ui/react';

import priceFormatter from '../utils/priceFormatter';

import MenuFilterComponent from '../components/MenuFilterComponent';

import paketList from '../mocks/paket';
import { PaketType } from '../types/global';

const MenuPage = () => {
  const [arrPaket, setArrPaket] = useState<PaketType[]>([])
  
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
      <Flex p='25px 15px 40px' w={{base:'100%', lg:'990px'}} m='0 auto' justifyContent='center'>
        <Flex flexDirection={{base: 'column', lg:'row'}} gap={{base:'20px', lg:'30px'}} w='100%' justifyContent='space-between'>
          <MenuFilterComponent />
          
          <Grid templateColumns={{base: '1fr', lg:'repeat(2, 1fr)'}} gap={{base:'10px', lg:'15px'}} w='100%' h={'max-content'}>
            { arrPaket.map((paket, index) => (
              <GridItem
                as={ReactLink}
                key={index}
                to={'/product/' + paket.slug}
                p={{base:'10px', lg:'20px'}}
                w='100%'
                h='max-content'
                boxShadow='2px 2px 15px -4px #6b6b6b'
                borderRadius='10px'
                bg='white'
                display={{base:'flex', lg:'block'}}
                alignItems={{base:'center', lg:'unset'}}
                gap={{base:'20px', lg:'0'}}
              >
                <Image src={`/paket/${paket.image}.jpg`} w={{base:'210px',lg:'100%'}} objectFit='cover'></Image>
                <Box>
                  <Text color='text.main' fontSize={{base:'18px', lg:'23px'}} mt={{lg:'5px'}}>{paket.name}</Text>
                  <Text color='text.main' fontSize={{lg:'17px'}}>{priceFormatter(paket.price)}</Text>
                </Box>
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