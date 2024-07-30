'use client'
import { Image, Container } from '@mantine/core'
import React from 'react'

const HeroSection = () => {
  return (
    <Container size="xxl">
      <Image
        radius="md"
        src="heroBanner.png"
        alt="Hero Banner"
        sx={(theme) => ({
          width: '100%',
          maxHeight: '45vh',
          [theme.fn.smallerThan('sm')]: {
            maxHeight: '30vh',
          },
        })}
      />
    </Container>
  )
}

export default HeroSection
