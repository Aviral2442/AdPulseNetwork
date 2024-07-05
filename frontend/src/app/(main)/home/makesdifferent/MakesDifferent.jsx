'use client'
import { Button, Container, Flex, Grid, Group, Image, Paper, SimpleGrid, Text, Title } from '@mantine/core'
import React from 'react'
import classes from './makesdifferent.module.css'

const MakesDifferent = () => {
  return (
    <Container fluid p={50} >
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 150 }} >
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <Image src="makesDifferent.jpg" alt="makes different" className={classes.img} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }} className={classes.leftBox} >
          <Text>/ features /</Text>
          <Title mt={20} fz="xl" fw={700}>What makes us different?</Title>
          <Text>Ad Pulse Network is the top platform for securing 100% genuine, convertible traffic. Boost sales and ROI with modern ad
            formats like Text, Native, Image, and Popunder ads. Seamlessly monetize your website or blog traffic with our platform</Text>
          <div>
            <Flex
              mih={50}
              gap="xl"
              justify="flex-start"
              align="center"
              direction="row"
              wrap="wrap"
            >
              <Button bg={"white"} c={"black"} className={classes.btn} >Advertiser</Button>
              <Button bg={"white"} c={"black"} className={classes.btn} >Publishers</Button>
            </Flex>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default MakesDifferent