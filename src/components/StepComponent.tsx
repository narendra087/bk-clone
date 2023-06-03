import React, { useEffect, useState } from 'react'
import { Flex, Text, Button, useMediaQuery } from '@chakra-ui/react'

import { NavLink as ReactLink, useLocation } from 'react-router-dom';

const StepComponent = () => {
  const [isDesktop] = useMediaQuery('(min-width: 1024px)')
  const stepList = [
    {name:'Cart', url: '/cart/preview'},
    {name: isDesktop ? 'Delivery Info' : 'Delivery', url: '/cart/delivery'},
    {name:'Payment', url: '/cart/payment'},
  ]
  
  
  const { pathname } = useLocation()
  const [ activeIndex, setActiveIndex ] = useState<number>(0)
  
  useEffect(() => {
    const index = stepList.findIndex((step) => step.url === pathname)
    if (index !== -1) {
      setActiveIndex(index)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <Flex>
      { stepList.map((step, index) => (
        <Button
          key={index}
          as={ReactLink} to={step.url}
          variant={activeIndex >= index ? 'secondary' : 'inactive'}
          borderRadius='0'
          _first={{
            borderRadius: '5px 0 0 5px'
          }}
          _last={{
            borderRadius: '0 5px 5px 0'
          }}
          w='100%'
          _before={{
            display: (pathname === step.url && step.name !== 'Payment') ? 'block' : 'none',
            content: '""',
            width: {base:'0',lg:'32px'},
            height: {base:'0',lg:'32px'},
            position: 'absolute',
            right: {base:'-9px',lg:'-16px'},
            top: {base:'-1px',lg:'5px'},
            transform: {base:'none',lg:'rotate(45deg)'},
            background: {base:'transparent',lg:'#faaf18'},
            borderRadius: {base:'3px',lg:'7px 0px 7px 0px'},
            zIndex: 1000,
            borderTop: {base:'21px solid transparent', lg:'unset'},
            borderLeft: {base:'10px solid #faaf18', lg:'unset'},
            borderBottom: {base:'21px solid transparent', lg:'unset'},
          }}
        >
          <Text
            as='span'
            variant='sans'
            w='20px' h='20px' p='5px'
            bg={activeIndex >= index ? 'text.main' : 'text.inactive'}
            color='white'
            fontSize='13px'
            borderRadius='100%'
            letterSpacing='1px'
            display={{base:'none', lg:'flex'}}
            alignItems='center'
            justifyContent='center'
          >
            { index+1 }
          </Text>
          <Text
            fontSize={{base:'19px', lg:'21px'}} color={activeIndex >= index ? 'text.main' : 'text.inactive'}
            position='relative' bottom='1px'
          >
              &nbsp;{ step.name }
          </Text>
        </Button>
      ))}
    </Flex>
  )
}

export default StepComponent