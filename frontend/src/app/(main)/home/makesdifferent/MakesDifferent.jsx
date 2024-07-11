'use client'
import { Button, Container, Grid, Image, Text, Title } from '@mantine/core'
import React from 'react'
import classes from './makesdifferent.module.css'
import { IconMathGreater } from '@tabler/icons-react'

const MakesDifferent = () => {
  return (
    <Container fluid p={50}>
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 100 }}>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <Image src="makesDifferent.jpg" alt="makes different" className={classes.img} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }} className={classes.leftBox}>
          <Text>/ features /</Text>
          <Title mt={20} fz="xl" fw={700}>What Makes Us Different?</Title>
          <ul>
            <li><Text>Ad Pulse Network is the leading platform for securing 100% genuine, convertible traffic.</Text></li>
            <li><Text>Boost sales and ROI with modern ad formats like Text, Native, Image, and Popunder ads.</Text></li>
            <li><Text>Seamlessly monetize your website or blog traffic with our platform.</Text></li>
          </ul>
          <div>
            <Button bg={"white"} c={"black"} className={classes.btn}>
              Learn more &nbsp; <IconMathGreater size={15} />
            </Button>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default MakesDifferent
