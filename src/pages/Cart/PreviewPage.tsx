import React, { useEffect, useState } from 'react'
import { Box,
  Flex,
  Text,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Input,
  Button,
} from '@chakra-ui/react'

import { NavLink as ReactLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNotes } from '../../redux/slices/cartSlice';

import { useDebounce } from '../../utils/useDebounce';

import StepComponent from '../../components/StepComponent';
import ProductRow from '../../components/ProductRow';

import { CartType } from '../../types/global';
import priceFormatter from '../../utils/priceFormatter';

const PreviewPage = () => {
  const [ notes, setNotes ] = useState('')
  const [ totalPrice, setTotalPrice ] = useState(0)
  
  const cartData = useSelector((state:any) => state.cart.cartData)
  const notesData = useSelector((state:any) => state.cart.notes)
  const debounceNotes = useDebounce(notes, 500)
  const dispatch = useDispatch()
  
  useEffect(() => {
    setNotes(notesData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  useEffect(() => {
    dispatch(addNotes(debounceNotes))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceNotes])
  
  useEffect(() => {
    let price = 0
    cartData.forEach((cart:CartType) => {
      price += cart.quantity * cart.price
    })
    
    setTotalPrice(price)
  }, [cartData])
  
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
          w={{base:'100%',lg:'70%'}}
          textAlign='center'
        >
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th textTransform='capitalize' fontFamily='Flame-Regular' color='text.subtitle2' fontSize='13px' p='0 0 15px'>Menu Item</Th>
                  <Th textTransform='capitalize' fontFamily='Flame-Regular' color='text.subtitle2' fontSize='13px' p='0 0 15px'>Quantity</Th>
                  <Th textTransform='capitalize' fontFamily='Flame-Regular' color='text.subtitle2' fontSize='13px' p='0 0 15px' isNumeric>Subtotal</Th>
                </Tr>
              </Thead>
              <Tbody>
                { cartData.map((cart:CartType) => (
                  <ProductRow cart={cart} key={cart.slug} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          
          <Text
            as={ReactLink} to='/menus'
            variant='sans' fontSize='18px'
            m='25px 0 15px' color='primary.main'
            display='block' textAlign='left'
            w='max-content'
          >
            Continue Shopping
          </Text>
          
          <Box textAlign='left'>
            <Text variant='sans' fontSize='13px' mb='3px' color='text.subtitle2'>Add Notes</Text>
            <Input
              fontFamily='Flame-Sans'
              placeholder='Add notes to your order here...'
              _placeholder={{color:'text.placeholder'}}
              maxLength={15}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <Text textAlign='right' variant='sans' color='text.placeholder' fontSize='12px'>{notes.length}/15</Text>
          </Box>
        </Box>
        <Box
          p='25px 30px'
          w={{base:'100%',lg:'30%'}}
          textAlign='left'
        >
          <Flex flexDirection={{lg:'column'}}>
            <Text fontSize='13px' variant='sans' color='text.subtitle2'>Order Subtotal*</Text>
            <Text fontSize='28px' color='text.subtitle2'>{priceFormatter(totalPrice)}</Text>
          </Flex>
          <Text fontSize='11px' variant='sans' color='text.secondary' m='15px 0 30px'>* Price might change due to your delivery location.</Text>
          
          <Button as={ReactLink} to='/login' variant='primary' w='100%'>Login To Order</Button>
          <Button as={ReactLink} to='/cart/delivery' variant='primary-outline' w='100%' mt='5px'>Continue as Guest</Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default PreviewPage