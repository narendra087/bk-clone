import React, { useEffect } from 'react'
import { Box, VStack, Image } from '@chakra-ui/react'
import { NavLink as ReactLink } from 'react-router-dom'

import promo1 from '../images/promotions/promo1.jpg'
import promo2 from '../images/promotions/promo2.jpg'
import promo3 from '../images/promotions/promo3.jpg'
import promo4 from '../images/promotions/promo4.jpg'

const NewsPage = () => {
  const promoList = [
    {image: promo1, slug: 'cheeseburger-10k'},
    {image: promo2, slug: 'begadang-kenyang'},
    {image: promo3, slug: 'cashback-mandiri-50'},
    {image: promo4, slug: 'birthday-voucher'},
  ]
  
  useEffect(() => {
    document.title = 'News | BK'
  }, [])
  
  return (
    <Box width={{base: '100%', lg: '960px'}} m={{base:'20px auto',lg:'40px auto'}} p={{base: '0 15px', sm: '0 20px', lg: '0'}}>
      <VStack spacing={{base:'15px', lg:'30px'}}>
        { promoList.map((promo) => (
          <Box as={ReactLink} to={'/news/' + promo.slug}>
            <Image src={promo.image} />
          </Box>
        ))
          
        }
      </VStack>
    </Box>
  )
}

export default NewsPage