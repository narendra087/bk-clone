import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Flex, Input, Image, Text, useNumberInput, HStack, Button } from '@chakra-ui/react';

import { useDispatch } from 'react-redux'
import { addCart } from '../redux/slices/cartSlice';

import priceFormatter from '../utils/priceFormatter';

import MenuFilterComponent from '../components/MenuFilterComponent';

import paketList from '../mocks/paket';
import { PaketType } from '../types/global';

import minus from '../images/minus.png'
import plus from '../images/plus.png'

const ProductPage = () => {
  const [productData, setProductData] = useState<PaketType>()
  const params = useParams()
  const dispatch = useDispatch()
  
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
  
  useEffect(() => {
    getProductData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const getProductData = () => {
    const slug = params["slug"]
    
    const indexProduct = paketList.findIndex((list) => list.slug === slug)
    if (indexProduct !== -1) {
      setProductData(paketList[indexProduct])
      document.title = paketList[indexProduct].name + ' | BK'
    } else {
      document.title = 'Deskripsi Produk | BK'
    }
  }
  
  const handleAddProduct = () => {
    const tempProduct = {
      ...productData,
      quantity: Number(quantity.value)
    }
    
    console.log(tempProduct)
    dispatch(addCart(tempProduct))
  }
  
  return (
    <Flex p='25px 15px 40px' w={{base:'100%', lg:'990px'}} m='0 auto' justifyContent='center'>
      <Flex flexDirection={{base: 'column', lg:'row'}} gap={{base:'20px', lg:'30px'}} w='100%' justifyContent='space-between'>
        <MenuFilterComponent isDetail={true} />
        
        <Flex
          boxShadow='0px 0px 10px 1px rgba(0,0,0,0.1)'
          borderRadius='10px'
          w='100%'
          background='white'
        >
          <Box
            borderRight={{lg:'1px solid #E0E0E0'}}
            p='35px 20px'
            w={{base:'100%',lg:'73%'}}
            textAlign='center'
          >
            <Text fontSize='3xl' color='text.main'>{productData?.name}</Text>
            <Text fontSize='sm' color='text.subtitle2' m='10px 0 20px'>
              {productData?.description}&nbsp;
              <Text as='span' fontStyle='italic' fontWeight='thin' variant='sans'>{productData?.additionalInfo}</Text>
            </Text>
            <Image
              src={`/paket/${productData?.image}.jpg`}
              m='0 auto'
              maxW={{base:'300px',lg:'100%'}}
              w='100%'
              objectFit='cover'
              alt={`${productData?.name} product image`}
            />
            
            <Text fontSize='21px' color='text.main' textAlign='left' mt='30px'>Add Extras</Text>
          </Box>
          <Box
            bg={{base:'white',lg:'unset'}}
            w={{base:'100vw',lg:'37%'}}
            p={{base:'15px',lg:'35px 20px'}}
            position={{base:'fixed',lg:'relative'}}
            display={{base:'flex',lg:'block'}}
            bottom={{base:'0',lg:'unset'}}
            left={{base:'0',lg:'unset'}}
            justifyContent={{base:'space-between',lg:'unset'}}
            alignItems={{base:'center',lg:'unset'}}
          >
            <Text fontSize={{base:'17px', lg:'28px'}} variant='sans'>{ priceFormatter(productData?.price || 0) }</Text>
            <Text fontSize='11px' variant='sans' m='10px 0 25px' textTransform='uppercase' display={{base:'none', lg:'block'}}>Add On</Text>
            <Box display={{base:'flex',lg:'block'}} alignItems={{base:'center',lg:'unset'}} gap='10px'>
              <HStack>
                <Button {...dec} color='primary.100' p='0' ><Image src={minus} w='12px' h='12px' /></Button>
                <Input {...quantity} textAlign='center' w={{base:'40px',lg:'unset'}} px='10px' />
                <Button {...inc} color='primary.100' p='0' ><Image src={plus} w='12px' h='12px' /></Button>
              </HStack>
              
              <Button
                onClick={() => handleAddProduct()}
                mt={{lg:'20px'}}
                w='100%' maxW={{base:'80px',lg:'100%'}}
                fontSize={{base:'12px',lg:'16px'}} variant='primary'
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ProductPage