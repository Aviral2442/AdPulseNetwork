'use client'
import { Button, Container, Flex, Grid, Group, Image, Paper, SimpleGrid, Text, Title } from '@mantine/core'
import React from 'react'
import classes from './makesdifferent.module.css'
import { IconInnerShadowBottomLeftFilled, IconMathGreater } from '@tabler/icons-react'

const MakesDifferent = () => {
  return (
    <Container fluid p={50} >
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 150 }} >
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <Image src="makesDifferent.jpg" alt="makes different" className={classes.img} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }} className={classes.leftBox}  >
          <Text>/ features /</Text>
          <Title mt={20} fz="xl" fw={700}>What Makes Us Different?</Title>
          <Text><li>Ad Pulse Network is the leading platform for securing 100% genuine, convertible traffic.</li></Text>
          <Text><li>Boost sales and ROI with modern ad formats like Text, Native, Image, and Popunder ads.</li></Text>
          <Text><li> Seamlessly monetize your website or blog traffic with our platform.</li></Text>
          <div>
              <Button bg={"white"} c={"black"} className={classes.btn} >Learn more &nbsp; <IconMathGreater size={15} /></Button>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default MakesDifferent