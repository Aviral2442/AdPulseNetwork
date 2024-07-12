'use client'
import { Box, Button, Container, Grid, Image, Text, Title } from '@mantine/core'
import React from 'react'
import classes from './makesdifferent.module.css'
import { IconMathGreater } from '@tabler/icons-react'

const MakesDifferent = () => {
  return (
    <Container fluid p={60}>
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 100 }}>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <Image src="makesDifferent.png" alt="makes different" className={classes.img} />  
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }} className={classes.leftBox}>
          <Box className={classes.box} >
            <div>
            <Text>/ features /</Text>
            <Title mt={20} size={50} py={10} fw={700}>What Makes Us Different?</Title>

            <Text py={8} >
              Ad Pulse Network is the top platform for obtaining 100% genuine, convertible traffic.
            </Text>
            <Text py={8} >
              Increase sales and ROI using our modern ad formats: Text, Native, Image, and Popunder ads.
            </Text>
            <Text py={8} >
              Effortlessly monetize your website or blog traffic with our platform.
            </Text>
            <Text py={8} >
              Benefit from high-quality, convertible traffic to boost your business.
            </Text>
            <Text py={8} >
              Utilize our advanced ad formats to maximize your advertising potential.
            </Text>
            </div>
            <div>
              <Button bg={"white"} c={"black"} className={classes.btn}>
                Learn more &nbsp; <IconMathGreater size={15} />
              </Button>
            </div>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default MakesDifferent
