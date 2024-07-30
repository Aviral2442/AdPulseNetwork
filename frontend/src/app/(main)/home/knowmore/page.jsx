'use client'
import { Container, Image, SimpleGrid } from '@mantine/core'
import React from 'react'

const KnowMore = () => {
  return (
    <Container
      fluid
      sx={(theme) => ({
        padding: 10,
        [theme.fn.smallerThan('sm')]: {
          padding: 2,
        },
      })}
    >
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 'sm', cols: 1 },
          { maxWidth: 'md', cols: 2 },
          { maxWidth: 'lg', cols: 3 },
        ]}
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
    </Container>
  )
}

export default KnowMore
