'use client'
import { Container, Image, SimpleGrid } from '@mantine/core'
import React from 'react'

const KnowMore = () => {
  return (
    <Container fluid p={10} >
      <div>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          p={40}
        >
          <div>
            <Image
              radius="md"
              src="image1.png"
              alt='Image 1'
            />
          </div>
          <div>
            <Image
              radius="md"
              src="image2.png"
              alt='Image 2'
            />
          </div>
          <div>
            <Image
              radius="md"
              src="image8.png"
              alt='Image 3'
            />
          </div>
        </SimpleGrid>
      </div>
    </Container>
  )
}

export default KnowMore