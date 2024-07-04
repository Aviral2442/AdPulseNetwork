'use client'
import { Image } from '@mantine/core'
import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <Image
        radius="md"
        src="heroBanner.jpeg"
        h={"30%"}
        mt={5}
      />
    </div>
  )
}

export default HeroSection