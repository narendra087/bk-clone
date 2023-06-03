import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Button, Input, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react'

import { NavLink as ReactLink } from 'react-router-dom';

import StepComponent from '../../components/StepComponent';
import MapComponent from '../../components/MapComponent';

import { LocationType } from '../../types/global';

const DeliveryPage = () => {
  const [guestName, setGuestName] = useState<string>('')
  const [guestPhone, setGuestPhone] = useState()
  const [location, setLocation] = useState<LocationType>()
  const [address, setAddress] = useState<string>()
  
  useEffect(() => {
    document.title = 'Delivery | BK'
  }, [])
  
  const handleChange = (e: any) => {
    const rgx = /^[0-9\b]+$/;
    if (e.target.value === '' || rgx.test(e.target.value)) {
      setGuestPhone(e.target.value)
    }
  }
  
  const handleChangePosition = (location: LocationType) => {
    setLocation(location)
  }
  
  return (
    <Box width={{base: '100%', lg: '960px'}} m={{base:'20px auto',lg:'40px auto'}} p={{base: '0 15px', sm: '0 20px', lg: '0'}}>
      <StepComponent />
      
      <Flex
        boxShadow='0px 0px 10px 1px rgba(0,0,0,0.1)'
        borderRadius='10px'
        w='100%'
        background='white'
        mt='20px'
        flexDirection={{base:'column',lg:'row'}}
      >
        <Box
          borderRight={{lg:'1px solid #E0E0E0'}}
          p={{base:'20px',lg:'25px 30px'}}
          w={{base:'100%',lg:'40%'}}
        >
          <Text
            variant='sans'
            mb='10px'
            color='text.subtitle2'
            textTransform='uppercase'
          >
            Guest Details
          </Text>
          
          <InputGroup>
            <Input
              fontFamily='Flame-Sans'
              placeholder='Full Name'
              _placeholder={{color:'text.placeholder'}}
              maxLength={20}
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              mb='10px'
            />
          </InputGroup>
          
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              fontFamily='Flame-Sans'
            >
              +62
            </InputLeftElement>
            <Input
              value={guestPhone}
              onChange={handleChange}
              type='tel'
              name='phone'
              fontFamily='Flame-Sans'
              placeholder='Mobile Number'
              _placeholder={{color:'text.placeholder'}}
            />
          </InputGroup>
        </Box>
        <Box
          p={{base:'0 20px 20px',lg:'25px 30px'}}
          w={{base:'100%',lg:'60%'}}
        >
          <Box>
            <Text fontSize={{base:'20px',lg:'23px'}} color='text.main'>Lokasi Pengantaran</Text>
            <Text variant='sans' color='text.subtitle2' mt={{base:'10px',lg:'20px'}} fontSize={{base:'15px',lg:'16px'}}>1. Set Lokasi Pengantaran di Peta</Text>
            <Text variant='sans' color='text.subtitle2' fontSize={{base:'12px',lg:'14px'}}>Pastikan pin lokasi sudah sesuai dengan lokasi pengantaran</Text>
            <Box mt='20px' mx={{base:'-20px', lg:'0'}} bg='text.placeholder' height='300px'>
              <MapComponent onChange={handleChangePosition} />
            </Box>
          </Box>
          
          <Box mt='30px'>
            <Text variant='sans' color='text.subtitle2' fontSize={{base:'15px',lg:'16px'}}>2. Berikan Alamat Lengkap</Text>
            <Text variant='sans' color='text.subtitle2' fontSize={{base:'12px',lg:'14px'}}>Tambahkan catatan atau acuan jika perlu (contoh: "di sebelah salon")</Text>
            <Textarea
              fontFamily='Flame-Sans'
              fontSize='15px'
              p='10px 15px'
              color='text.subtitle2'
              border='1px solid #E0E0E0'
              placeholder='Mohon set lokasi pengantaran di peta sebelum mengisi alamat pengantaran'
              _placeholder={{color:'text.placeholder'}}
              mt='20px'
              bg='#EFEFEF4D'
              onChange={(e) => setAddress(e.target.value)}
            >
                {address}
            </Textarea>
            <Button as={ReactLink} to='/cart/payment' variant='primary' w='100%' mt='20px'>Continue</Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default DeliveryPage