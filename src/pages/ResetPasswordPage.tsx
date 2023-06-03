import React, { useEffect } from 'react'
import { Box, Flex, Input, Stack, Text, Button } from '@chakra-ui/react'

const ResetPasswordPage = () => {
  
  useEffect(() => {
    document.title = 'Reset Password | BK'
  }, [])
  
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
          <Text fontSize='38px' lineHeight='42px' mb='35px' color='text.main'>Forget Password</Text>
          <Text color='text.subtitle2' variant='sans' mb='25px' textAlign='left'>
            Please fill in your email address below and we'll send you an email with instructions on how to reset your password.
          </Text>
          
          <Box>
          <Stack spacing={4}>
            <Input type='email' name='email' fontFamily='Flame-Sans' placeholder='Email' _placeholder={{color:'text.placeholder'}} />
            <Button variant='primary'>Send</Button>
          </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default ResetPasswordPage