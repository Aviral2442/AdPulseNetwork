'use client'
import { Container, Flex, Grid, Paper } from '@mantine/core'
import React from 'react'

const PublisherSignup = () => {
  return (
    <Container fluid bg={"gray"}>
      <Paper>
        <Flex
          mih={50}
          justify="center"
          align="center"
          bg={"gray"}
        >
          <Grid bg={"white"}  >
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
          </Grid>
        </Flex>
      </Paper>
    </Container>
  )
}

export default PublisherSignup