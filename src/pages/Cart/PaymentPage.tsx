import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Button, TableContainer, Table, Tbody, Th, Thead, Tr, Td, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { NavLink as ReactLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import StepComponent from '../../components/StepComponent';

import { CartType } from '../../types/global';
import priceFormatter from '../../utils/priceFormatter';

import dana from '../../images/dana.png'
import ovo from '../../images/ovo.png'
import gopay from '../../images/gopay.png'
import check from '../../images/check.png'

const PaymentPage = () => {
  const cartData = useSelector((state:any) => state.cart.cartData)
  const notesData = useSelector((state:any) => state.cart.notes)
  const guestData = useSelector((state:any) => state.cart.guest)
  
  const deliverySurcharge = 4545
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ deliveryFee, setDeliveryFee ] = useState(0)
  const [ taxFee, setTaxFee ] = useState(0)
  
  const [ activePayment, setActivePayment ] = useState('')
  const [ ovoNumber, setOvoNumber ] = useState('')
  
  useEffect(() => {
    let price = 0
    cartData.forEach((cart:CartType) => {
      price += cart.quantity * cart.price
    })
    
    if (price > 50000) {
      setDeliveryFee(0)
    } else {
      setDeliveryFee(8000)
    }
    
    const tempTax = Math.round((price + deliverySurcharge) * 0.1)
    setTaxFee(tempTax)
    
    setTotalPrice(price)
  }, [cartData])
  
  const handleChange = (e: any) => {
    const rgx = /^[0-9\b]+$/;
    if (e.target.value === '' || rgx.test(e.target.value)) {
      setOvoNumber(e.target.value)
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
          w={{base:'100%',lg:'50%'}}
        >
          <TableContainer>
            <Table variant='simple'>
              <Thead borderBottom='1px solid #E0E0E0'>
                <Tr>
                  <Th textTransform='capitalize' fontFamily='Flame-Regular' color='text.subtitle2' fontSize='13px' p='0 0 15px'>Order Summary</Th>
                </Tr>
              </Thead>
              <Tbody borderColor='#E0E0E0'>
                { cartData.map((cart:CartType) => (
                  <Tr key={cart.slug} borderColor='#E0E0E0'>
                    <Td p='12px 5px 12px 0' w='55%'><Text fontSize='12px' color='text.subtitle2' variant='sans'>{cart.name}</Text></Td>
                    <Td p='12px 5px' w='20%' isNumeric><Text fontSize='12px' color='text.subtitle2' variant='sans'>x{cart.quantity}</Text></Td>
                    <Td p='12px 0 12px 5px' w='25%' isNumeric><Text fontSize='12px' color='text.subtitle2' variant='sans'>{priceFormatter(cart.price * cart.quantity)}</Text></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Table variant='simple' mt='15px'>
              <Tbody borderColor='#E0E0E0'>
                <Tr>
                  <Td p='3px 0' w='50%' border='none'><Text fontSize='15px' color='text.subtitle2' variant='sans'>Subtotal</Text></Td>
                  <Td p='3px 0' w='50%' border='none' isNumeric><Text fontSize='15px' color='text.subtitle2' variant='sans'>{priceFormatter(totalPrice, false)}</Text></Td>
                </Tr>
                <Tr>
                  <Td p='3px 0' w='50%' border='none'><Text fontSize='15px' color='text.subtitle2' variant='sans'>Delivery Fee</Text></Td>
                  <Td p='3px 0' w='50%' border='none' isNumeric><Text fontSize='15px' color='text.subtitle2' variant='sans'>{priceFormatter(deliveryFee, false)}</Text></Td>
                </Tr>
                <Tr>
                  <Td p='3px 0' w='50%' border='none'><Text fontSize='15px' color='text.subtitle2' variant='sans'>PPN 10%</Text></Td>
                  <Td p='3px 0' w='50%' border='none' isNumeric><Text fontSize='15px' color='text.subtitle2' variant='sans'>{priceFormatter(taxFee, false)}</Text></Td>
                </Tr>
                <Tr>
                  <Td p='3px 0' w='50%' border='none'><Text fontSize='15px' color='text.subtitle2' variant='sans'>Delivery Surcharge</Text></Td>
                  <Td p='3px 0' w='50%' border='none' isNumeric><Text fontSize='15px' color='text.subtitle2' variant='sans'>{priceFormatter(deliverySurcharge, false)}</Text></Td>
                </Tr>
                <Tr>
                  <Td p='8px 0' w='50%' border='none'><Text fontSize='23px' color='text.subtitle2'>Total</Text></Td>
                  <Td p='8px 0' w='50%' border='none' isNumeric><Text fontSize='23px' color='text.subtitle2'>{priceFormatter(totalPrice + deliveryFee + taxFee + deliverySurcharge)}</Text></Td>
                </Tr>
              </Tbody>
            </Table>
            
            <Box m='25px 0 0' p='15px 20px' bg='#FAFAFA'>
              <Text fontSize='12px' variant='sans' color='text.subtitle2'>NOTES: {notesData || '-'}</Text>
            </Box>
          </TableContainer>
        </Box>
        
        <Box
          p='25px 30px'
          w={{base:'100%',lg:'50%'}}
        >
          <Text fontSize='13px' variant='sans' color='text.subtitle2' mb='20px'>Deliver To {guestData?.address || '-'}</Text>
          <Flex justifyContent='space-between' alignItems='center'>
            <Button variant='primary-outline' borderColor='primary.main' borderWidth='1px' fontSize='14px'>Apply Kupon / Promo Code</Button>
            <Text variant='bold' fontSize='28px' color='text.subtitle2'>{priceFormatter(totalPrice + deliveryFee + taxFee + deliverySurcharge)}</Text>
          </Flex>
          
          <Text fontSize='13px' variant='sans' color='text.subtitle2' m='20px 0 5px'>Pay With</Text>
          <Flex gap='10px'>
            <Flex
              onClick={() => setActivePayment('dana')}
              w='100%' cursor='pointer'
              alignItems='center' justifyContent='center'
              p='5px' border='1px solid' borderColor={ activePayment === 'dana' ? 'primary.main' :'#E0E0E0'}
              position='relative'
            >
              <Image src={dana} w='64px' />
              {activePayment === 'dana' && <Image src={check} w='18px' h='18px' position='absolute' top='-9px' right='-9px' />}
            </Flex>
            <Flex
              onClick={() => setActivePayment('ovo')}
              w='100%' cursor='pointer'
              alignItems='center' justifyContent='center'
              p='5px' border='1px solid' borderColor={ activePayment === 'ovo' ? 'primary.main' :'#E0E0E0'}
              position='relative'
            >
              <Image src={ovo} w='64px' />
              {activePayment === 'ovo' && <Image src={check} w='18px' h='18px' position='absolute' top='-9px' right='-9px' />}
            </Flex>
            <Flex
              onClick={() => setActivePayment('gopay')}
              w='100%' cursor='pointer'
              alignItems='center' justifyContent='center'
              p='5px' border='1px solid' borderColor={ activePayment === 'gopay' ? 'primary.main' :'#E0E0E0'}
              position='relative'
            >
              <Image src={gopay} w='64px' />
              {activePayment === 'gopay' && <Image src={check} w='18px' h='18px' position='absolute' top='-9px' right='-9px' />}
            </Flex>
          </Flex>
          
          { activePayment === 'ovo' &&
            <Box mt='20px'>
              <Text variant='sans' color='text.subtitle2' mb='5px'>Your OVO Mobile Number</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  fontFamily='Flame-Sans'
                >
                  +62
                </InputLeftElement>
                <Input
                  value={ovoNumber}
                  onChange={handleChange}
                  type='tel'
                  name='phone'
                  fontFamily='Flame-Sans'
                  placeholder='Mobile Number'
                  _placeholder={{color:'text.placeholder'}}
                />
              </InputGroup>
            </Box>
          }
          
          <Button variant='primary' w='100%' mt='40px'>Place My Order</Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default PaymentPage