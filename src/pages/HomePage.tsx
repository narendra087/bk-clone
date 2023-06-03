import React, { useEffect } from 'react'
import CarouselComponent from '../components/CarouselComponent'
import { Box, Text, Grid, GridItem, Image, Button } from '@chakra-ui/react'

import { Link as ReactLink } from 'react-router-dom';


import kings from '../images/menus/kings.jpg'
import special from '../images/menus/special.jpg'
import tropical from '../images/menus/tropical.jpg'
import bkapp from '../images/menus/bkapp.jpg'
import cheeseburger from '../images/menus/cheeseburger.jpg'
import cheesewhopper from '../images/menus/cheesewhopper.jpg'
import gold from '../images/menus/gold.jpg'
import kids from '../images/menus/kids.jpg'
import sidedessert from '../images/menus/sidedessert.jpg'
import beverages from '../images/menus/beverages.jpg'
import kingdeals from '../images/menus/kingdeals.jpg'

const HomePage = () => {
  const arrayItem = [
    {id: 1, name: 'King`s Chicken [Rasa Baru]', slug: 'kings-chicken-rasa-baru', image: kings},
    {id: 2, name: 'Special Menu', slug: 'special-menu', image: special},
    {id: 3, name: 'Tropical Whopper [Limited Time]', slug: 'tropical-whopper-limited-time', image: tropical},
    {id: 4, name: 'BK APP EXCLUSIVE', slug: 'bk-app-exclusive', image: bkapp},
    {id: 5, name: 'Cheese Burger Favorit', slug: 'cheese-burger-favorit', image: cheeseburger},
    {id: 6, name: 'Cheese Whopper', slug: 'cheese-whopper', image: cheesewhopper},
    {id: 7, name: 'Gold Collection', slug: 'gold-collection', image: gold},
    {id: 8, name: 'Kids Meal', slug: 'kids-meal', image: kids},
    {id: 9, name: 'Side & Dessert', slug: 'side-dessert', image: sidedessert},
    {id: 10, name: 'BEVERAGES', slug: 'beverages', image: beverages},
    {id: 11, name: 'KING DEALS', slug: 'king-deals', image: kingdeals},
  ]
  
  useEffect(() => {
    document.title = 'Homepage | BK'
  }, [])
  
  return (
    <Box
      backgroundImage='url(/background.jpg) !important'
      backgroundPosition={{lg:'center'}}
      backgroundRepeat='no-repeat'
      backgroundAttachment='fixed'
      backgroundSize='cover'
      minH='100vh'
      w='100%'
      top={{base:'50px', lg:'0'}}
      mt={{base:'-50px', lg:'0'}}
      pb={{base:'10px', lg:'0'}}
      position='relative'
    >
      <CarouselComponent />
      <Box width={{base: '100%', lg: '960px'}} m='40px auto' p={{base: '0 15px', sm: '0 20px', lg: '0'}}>
        <Text fontSize='32px' color='text.main' variant='bold' textAlign='center' mb='30px'>Our Menus</Text>
        <Grid templateColumns={{base: 'repeat(2, 1fr)', lg:'repeat(3, 1fr)'}} gap='15px'>
          {
            arrayItem.map(item => (
              <GridItem
                as={ReactLink}
                to={'/menus/' + item.slug}
                bg='#FFF'
                key={item.id}
                boxShadow='2px 2px 15px -4px #6b6b6b'
                p={{base:'10px',lg:'20px'}}
                w='100%'
                borderRadius='10px'
              >
                <Image src={item.image} w='100%' />
                <Grid templateColumns={{base:'1fr',lg:'repeat(2, 1fr)'}} gap='5px' mt='10px'>
                  <Text fontSize={{base:'16px',sm:'21px'}} variant='bold' color='text.main' textAlign={{base:'center',lg:'left'}}>{item.name}</Text>
                  <Button display={{base:'none',lg:'block'}} w='100%' variant='primary'>Order</Button>
                </Grid>
              </GridItem>
            ))
          }
        </Grid>
      </Box>
    </Box>
  )
}

export default HomePage