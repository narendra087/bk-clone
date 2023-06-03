import React, { useEffect } from 'react'
import { Box, Flex, Text, Button, Image } from '@chakra-ui/react'

import register from '../images/register.jpg'

import { NavLink as ReactLink } from 'react-router-dom'

const NotFoundPage = () => {
  
  useEffect(() => {
    document.title = 'Page Not Found | BK'
  }, [])
  
  return (
    <Flex p='25px 0' w={{base:'100%', lg:'960px'}} m='auto' justifyContent='center' alignItems='center' minH={{base:'calc(100vh - 50px)', lg:'calc(100vh - 79px)'}}>
      <Box
        borderRadius='10px'
        boxShadow='0px 0px 7px 0px rgba(0,0,0,0.2)'
        maxW='450px'
        w='100%'
        m='0 15px'
        bg='white'
      >
        <Box
          p='35px 35px 0'
          w='100%'
          borderBottom='1px solid #E0E0E0'
          textAlign='center'
        >
          <Text fontSize='38px' lineHeight='42px' color='text.main'>Page Not Found</Text>
          
          <Box mt='35px'>
            <Button as={ReactLink} to='/menus' variant='primary' mt='10px'>Continue Shopping</Button>
            <Flex m='20px -35px 0' justifyContent='center'>
              <Image src={register} w='350px'></Image>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default NotFoundPage