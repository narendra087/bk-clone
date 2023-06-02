import React, { useEffect, useState } from 'react'
import { NavLink as ReactLink, useLocation, useParams } from 'react-router-dom';
import {
  Box,
  InputGroup,
  Input,
  InputRightAddon,
  Stack,
  Flex,
  Text,
  Image,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  SimpleGrid,
  InputRightElement,
} from '@chakra-ui/react'

import search from '../images/search.png'
import searchGrey from '../images/search-grey.png'
import close from '../images/close.png'
import back from '../images/back.png'

import paketList from '../mocks/paket';

interface FilterProps {
  isDetail?: boolean
}

const MenuFilterComponent = ({ isDetail = false }:FilterProps) => {
  const arrLinks = [
    {name: 'King`s Chicken [Rasa Baru]', slug: 'kings-chicken-rasa-baru'},
    {name: 'Special Menu', slug: 'special-menu'},
    {name: 'Tropical Whopper [Limited Time]', slug: 'tropical-whopper-limited-time'},
    {name: 'Bk App Exclusive', slug: 'bk-app-exclusive'},
    {name: 'Cheese Burger Favorit', slug: 'cheese-burger-favorit'},
    {name: 'Cheese Whopper', slug: 'cheese-whopper'},
    {name: 'Gold Collection', slug: 'gold-collection'},
    {name: 'Kids Meal', slug: 'kids-meal'},
    {name: 'Side & Dessert', slug: 'side-dessert'},
    {name: 'Beverages', slug: 'beverages'},
    {name: 'King Deals', slug: 'king-deals'},
  ]
  
  const [isSearching, setIsSearching] = useState(false)
  const [slugname, setSlugname] = useState<string>()
  const [activeName, setActiveName] = useState<string>()
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { pathname } = useLocation();
  
  const params = useParams()
  
  useEffect(() => {
    setIsSearching(false)
    getName()
    if (isOpen) {
      onClose()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  
  const getName = () => {
    let slug = ''
    if (isDetail) {
      slug = params['slug'] || ''
      const indexProduct = paketList.findIndex((paket) => paket.slug === slug)
      if (indexProduct !== -1) {
        slug = paketList[indexProduct].category
      }
    } else {
      slug = params['*'] || 'kings-chicken-rasa-baru'
    }

    setSlugname(slug)
    const index = arrLinks.findIndex((link) => link.slug === slug)
    if (index !== -1) {
      setActiveName(arrLinks[index].name)
    } else {
      setActiveName('Select Menu')
    }
  }
  
  return (
    <>
      {/* DESKTOP */}
      <Box w={{base:'100%',lg:'202px'}} minW='202px' display={{base:'none', lg:'block'}}>
        <InputGroup bg='white' borderRadius='10px' boxShadow='1px 1px 8px -2px rgba(107,107,107,0.3)' mb='30px'>
          <Input fontFamily='Flame-Sans' placeholder='Search menu...' _placeholder={{color:'text.placeholder'}} />
          <InputRightAddon cursor='pointer' bg='primary.main' children={<Image src={search} w='16px' h='16px' />} />
        </InputGroup>
        
        <Stack spacing='10px'>
          {
            arrLinks.map((link, index) => (
              <Flex
                key={index}
                as={ReactLink}
                to={'/menus/'+link.slug}
                p='7px 20px 9px'
                w='100%'
                minH='56px'
                bg={(slugname === link.slug) ? 'primary.100' : 'primary.300'}
                borderRadius='10px'
                alignItems='center'
              >
                <Text color='text.main3' fontSize='18px'>{link.name}</Text>
              </Flex>
            ))
          }
        </Stack>
      </Box>
      
      {/* MOBILE */}
      <Box onClick={() => onClose()} display={isOpen ? 'block' : 'none'} p='12px 15px' zIndex='5000' bg='background.dark' position='fixed' top='0' left='0' w='50px' h='50px'>
        <Image src={close} w='25px' h='25px' objectFit='cover'></Image>
      </Box>
      <Flex gap={{base: '15px', sm:'20px'}} display={{base:'flex', lg:'none'}}>
        { !isDetail &&
          <Button onClick={() => setIsSearching(!isSearching)} variant='primary' minW={{base: '50px', sm:'120px'}} >
            <Image src={isSearching ? back : search} w='16px' h='16px' />
          </Button>
        }
        
        { !isSearching ? (
          <Button
            variant='secondary'
            w='100%'
            justifyContent='left'
            pr='50px'
            _before={{
              content: '""',
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width:'0',
              height:'0',
              borderStyle: 'solid',
              borderWidth: '10px 10px 0 10px',
              borderColor: '#fff transparent transparent transparent',
            }}
          >
            <Text onClick={onOpen} textOverflow='ellipsis' overflow='hidden' w='100%' whiteSpace='nowrap' textAlign='left'>{ activeName }</Text>
          </Button> ) : (
          <InputGroup bg='white' borderRadius='10px' boxShadow='1px 1px 8px -2px rgba(107,107,107,0.3)'>
            <Input fontFamily='Flame-Sans' placeholder='Search menu...' _placeholder={{color:'text.placeholder'}} />
            <InputRightElement>
              <Image src={searchGrey} w='16px' h='16px' />
            </InputRightElement>
          </InputGroup>
        )}
      </Flex>
      
      <Drawer onClose={onClose} isOpen={isOpen} size='full' placement='top'>
        <DrawerOverlay top='50px!important' />
        <DrawerContent top='50px!important'>
          <DrawerBody bg='background.dark' p='40px 20px'>
            <SimpleGrid columns={2} spacing={5}>
            {
              arrLinks.map((link, index) => (
                <Flex
                  key={index}
                  as={ReactLink}
                  to={'/menus/'+link.slug}
                  p='5px 12px'
                  w='100%'
                  minH='48px'
                  bg={(slugname === link.slug) ? 'primary.100' : 'primary.300'}
                  borderRadius='10px'
                  alignItems='center'
                >
                  <Text color='text.main3' fontSize='16px'>{link.name}</Text>
                </Flex>
              ))
            }
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MenuFilterComponent