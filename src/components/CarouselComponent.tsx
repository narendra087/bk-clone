import React from 'react'
import Carousel from 'nuka-carousel'
import { Image } from '@chakra-ui/react';

import nextArrow from '../images/arrow-next.png'
import prevArrow from '../images/arrow-prev.png'

import image1 from '../images/image-carousel-1.jpg'
import image2 from '../images/image-carousel-2.jpg'
import image3 from '../images/image-carousel-3.jpg'
import image4 from '../images/image-carousel-4.jpg'
import image5 from '../images/image-carousel-5.jpg'

const CarouselComponent = () => {
  return (
    <Carousel
      autoplay
      wrapAround
      dragging
      swiping
      pauseOnHover
      defaultControlsConfig={{
        pagingDotsStyle: {
          width: '7px',
          height: '7px',
          bottom: '-27px',
          position: 'relative',
          marginRight: '10px',
          background: '#f1bc87',
          fill: '#ed7801',
          borderRadius: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
          
        },
        prevButtonText: <Image src={prevArrow} w='48px' h='48px'></Image>,
        prevButtonStyle: {
          background: 'transparent',
          marginLeft: '20px',
        },
        nextButtonText: <Image src={nextArrow} w='48px' h='48px'></Image>,
        nextButtonStyle: {
          background: 'transparent',
          marginRight: '20px',
        },
      }}
    >
      <Image src={image1} width='100%'></Image>
      <Image src={image2} width='100%'></Image>
      <Image src={image3} width='100%'></Image>
      <Image src={image4} width='100%'></Image>
      <Image src={image5} width='100%'></Image>
    </Carousel>
  )
}

export default CarouselComponent