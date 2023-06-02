import React, { useEffect, useState } from 'react'
import { Flex, Text, Button } from '@chakra-ui/react'

import { NavLink as ReactLink, useLocation } from 'react-router-dom';

const StepComponent = () => {
  const stepList = [
    {name:'Cart', url: '/cart/preview'},
    {name:'Delivery Info', url: '/cart/delivery'},
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
            width: '32px',
            height: '32px',
            position: 'absolute',
            right: '-16px',
            top: '5x',
            transform: 'rotate(45deg)',
            background: '#faaf18',
            borderRadius: '7px 0px 7px 0px',
            zIndex: 1000,
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
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            { index+1 }
          </Text>
          <Text fontSize='21px' color={activeIndex >= index ? 'text.main' : 'text.inactive'} position='relative' bottom='1px'>&nbsp;{ step.name }</Text>
        </Button>
      ))}
    </Flex>
  )
}

export default StepComponent