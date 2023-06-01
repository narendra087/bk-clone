import React, { useState } from 'react'
import { Box, Flex, Input, InputGroup, InputLeftElement, Stack, Text, Button, Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom';

const LoginPage = () => {
  const [phone, setPhone] = useState()
  
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
          p='35px'
          w='100%'
          borderBottom='1px solid #E0E0E0'
          textAlign='center'
        >
          <Text fontSize='38px' color='text.main'>Welcome!</Text>
          <Text fontSize='15px' color='text.subtitle2' variant='sans' mb='35px'>Enter your mobile number and password to login</Text>
          
          <Box>
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
                placeholder='Phone number'
                _placeholder={{color:'text.placeholder'}}
              />
            </InputGroup>

            <Input type='password' name='password' fontFamily='Flame-Sans' placeholder='Password' _placeholder={{color:'text.placeholder'}} />
            
            <Button variant='primary' mt='10px'>Login</Button>
            
            <Link as={ReactLink} to='/reset-password' mt='15px' textAlign='left' fontSize='15px' fontFamily='Flame-Sans' color='text.main2'>
              Forget password?
            </Link>
          </Stack>
          </Box>
        </Box>
        <Box
          p='35px'
          w='100%'
        >
          <Text fontSize='26px' color='text.main' mb='10px'>Not A Member Yet?</Text>
          <Flex gap='5px'>
            <Text fontSize='15px' color='text.subtitle2' fontFamily='Flame-Sans'>Register to get reward points and exclusive promotions.</Text>
            <Button as={ReactLink} to='/register' minW='128px' variant='secondary'>Register</Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default LoginPage