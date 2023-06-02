import React from 'react'
import { Button, Text, Image, Flex, HStack, Input, Td, Tr, useNumberInput } from '@chakra-ui/react'
import priceFormatter from '../utils/priceFormatter'

import { useDispatch } from 'react-redux'
import { changeQuantity, removeCart } from '../redux/slices/cartSlice';

import minus from '../images/minus.png'
import plus from '../images/plus.png'
import deleteIcon from '../images/delete.png'

import { CartType } from '../types/global'

interface ComponentProps {
  cart: CartType
}

const ProductRow = ( { cart }: ComponentProps ) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 99,
      precision: 0,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const quantity = getInputProps()
  
  const dispatch = useDispatch()
  
  const handleChangeQuantity = () => {
    const data = {
      cart,
      quantity: Number(quantity?.value) || 0
    }
    dispatch(changeQuantity(data))
  }
  
  const handleDeleteProduct = () => {
    dispatch(removeCart(cart))
  }
  
  return (
    <Tr borderColor='#E0E0E0'>
      <Td w='60%' p='15px 15px 15px 0'>
        <Flex gap='15px'>
          <Image src={`/paket/${cart.image}.jpg`} w='65px' objectFit='cover'></Image>
          <Text fontSize='14px' color='text.subtitle2' variant='sans'>{cart.name}</Text>
        </Flex>
      </Td>
      <Td w='20%' p='15px 0'>
      <HStack>
        <Button {...dec} onClick={() => handleChangeQuantity()} color='primary.100' p='0' w='30px' h='30px' minW='unset' ><Image src={minus} w='12px' h='12px' /></Button>
        <Input {...quantity} textAlign='center' w='40px' h='30px' px='10px' value={cart.quantity} />
        <Button {...inc} onClick={() => handleChangeQuantity()} color='primary.100' p='0' w='30px' h='30px' minW='unset' ><Image src={plus} w='12px' h='12px' /></Button>
      </HStack>
      </Td>
      <Td isNumeric w='20%' p='15px 0'>
        <Flex alignItems='center' gap='5px' justifyContent='end'>
          <Text fontSize='14px' color='text.subtitle2' variant='sans'>
            {priceFormatter(cart.price * cart.quantity)}
          </Text>
          <Image cursor='pointer' onClick={() => handleDeleteProduct()} src={deleteIcon} w='16px' h='16px' />
        </Flex>
      </Td>
    </Tr>
  )
}

export default ProductRow