'use client'
import { Container, Flex, Grid, Paper, Text } from '@mantine/core'
import React from 'react'
import classes from './publisherSignup.module.css'
import PubSignupForm from './PubSignupForm'

const PublisherSignup = () => {
  return (
    <Container fluid bg="#F0F2F4" h={"100vh"}>
      <Paper>
        <Flex
          mih={"100vh"}
          justify="center"
          align="center"
          bg={"#F0F2F4"}
        >
          <Grid bg={"#FFFFFF"} className={classes.grid} >
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <div className={classes.rightSection} >
                <Text  py={15}  align="center" weight={700} size="xl">Publisher Signup</Text>
                <Text  py={15} >Register Now to Unlock A Range of Advertising Benefits!</Text>
                <Text  py={15} >7Search PPC might be your gateway to success and a one-stop solution for all your business advertising needs.
                  Whether you are a small enterprise or a big business giant, we have the potential to boost your revenue
                  tremendously.</Text>
                <Text py={15} >Begin your advertising journey with just $100 at 7Search PPC by filling in the required details and
                  submitting today!</Text>
                <Text py={15} >Please ensure that your website complies with all our advertising Terms and Policies to promote your business effectively.</Text>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <div className={classes.leftSection} >
                  <PubSignupForm />
              </div>
            </Grid.Col>
          </Grid>
        </Flex>
      </Paper>
    </Container>
  )
}

export default PublisherSignup