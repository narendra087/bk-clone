import React, { useState } from 'react'
import { Box, Flex, Text, Button, Input, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react'

import { NavLink as ReactLink, useLocation } from 'react-router-dom';

import StepComponent from '../../components/StepComponent';

const DeliveryPage = () => {
  const [guestName, setGuestName] = useState('')
  const [guestPhone, setGuestPhone] = useState()
  
  const handleChange = (e: any) => {
    const rgx = /^[0-9\b]+$/;
    if (e.target.value === '' || rgx.test(e.target.value)) {
      setGuestPhone(e.target.value)
    }
  }
  
  return (
    <Box width={{base: '100%', lg: '960px'}} m='40px auto' p={{base: '0 15px', sm: '0 20px', lg: '0'}}>
      <StepComponent />
      
      <Flex
        boxShadow='0px 0px 10px 1px rgba(0,0,0,0.1)'
        borderRadius='10px'
        w='100%'
        background='white'
        mt='20px'
      >
        <Box
          borderRight={{lg:'1px solid #E0E0E0'}}
          borderBottom={{base:'1px solid #E0E0E0', lg:'none'}}
          p='25px 30px'
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
          p='25px 30px'
          w={{base:'100%',lg:'60%'}}
        >
          <Box>
            <Text fontSize='23px' color='text.main'>Lokasi Pengantaran</Text>
            <Text variant='sans' color='text.subtitle2' mt='20px'>1. Set Lokasi Pengantaran di Peta</Text>
            <Text variant='sans' color='text.subtitle2' fontSize='14px'>Pastikan pin lokasi sudah sesuai dengan lokasi pengantaran</Text>
            <Box mt='20px' bg='text.placeholder' height='300px'>
              
            </Box>
          </Box>
          
          <Box mt='30px'>
            <Text variant='sans' color='text.subtitle2'>2. Berikan Alamat Lengkap</Text>
            <Text variant='sans' color='text.subtitle2' fontSize='14px'>Tambahkan catatan atau acuan jika perlu (contoh: "di sebelah salon")</Text>
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
            >
                
            </Textarea>
            <Button variant='primary' w='100%' mt='20px'>Continue</Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default DeliveryPage