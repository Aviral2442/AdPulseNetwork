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
            />
          </div>
          <div>
            <Image
              radius="md"
              src="image2.png"
            />
          </div>
          <div>
            <Image
              radius="md"
              src="image8.png"
            />
          </div>
        </SimpleGrid>
      </div>
    </Container>
  )
}

export default KnowMore