'use client'
import { Container, Image, SimpleGrid, Title } from '@mantine/core'
import React from 'react'

const Fundamentals = () => {
  return (
    <div>
        <Container fluid p={10} >
        <Title pt={50} pb={8} ta={"center"} fw={400} order={1}>Create Your Campaign with a Suitable Pricing Model and Enjoy Optimal Results</Title>

      <div>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          p={40}
        >
          <div>
            <Image
              radius="md"
              src="CPACostPerAction.png"
              alt='CPACostPerAction'
            />
          </div>
          <div>
            <Image
              radius="md"
              src="CPCCostPerClick.png"
              alt='CPCCostPerClick'
            />
          </div>
          <div>
            <Image
              radius="md"
              src="CPMCostPerMille.png"
              alt='CPMCostPerMille'
            />
          </div>
        </SimpleGrid>
      </div>
    </Container>
    </div>
  )
}

export default Fundamentals