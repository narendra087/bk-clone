import React, { useEffect, useState } from 'react'
import { Box, Flex, Input, InputGroup, InputLeftElement, Stack, Text, Button, Image } from '@chakra-ui/react'

import register from '../images/register.jpg'

const RegisterPage = () => {
  const [phone, setPhone] = useState()
  
  useEffect(() => {
    document.title = 'Register | BK'
  }, [])
  
  const handleChange = (e: any) => {
    const rgx = /^[0-9\b]+$/;
    if (e.target.value === '' || rgx.test(e.target.value)) {
        setPhone(e.target.value)
    }
  }
  
  return (
    <Flex pt='25px' w={{base:'100%', lg:'960px'}} m='0 auto' justifyContent='center'>
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
          <Text fontSize='38px' lineHeight='42px' color='text.main'>Register</Text>
          <Text color='text.subtitle2' variant='sans' my='10px'>
            Please enter your mobile number to register
          </Text>
          
          <Box mt='35px'>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  fontFamily='Flame-Sans'
                >
                  +62
                </InputLeftElement>
                <Input
                  value={phone}
                  onChange={handleChange}
                  type='tel'
                  name='phone'
                  fontFamily='Flame-Sans'
                  placeholder='821 3456 7890 (Example)'
                  _placeholder={{color:'text.placeholder'}}
                />
              </InputGroup>
              <Button variant='primary' mt='10px'>Register</Button>
            </Stack>
            <Flex m='20px -35px 0' justifyContent='center'>
              <Image src={register} w='350px'></Image>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default RegisterPage