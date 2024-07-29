'use client'
import { Box, Button, Container, Grid, Image, Text, Title } from '@mantine/core'
import React from 'react'
import classes from './registerCampion.module.css'
import { IconMathGreater } from '@tabler/icons-react'

const RegisterCampion = () => {
    return (
        <Container fluid p={60}>
            <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 100 }}>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <Image src="Campaign.png" alt="makes different" className={classes.img} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }} className={classes.leftBox}>
                    <Box className={classes.box} >
                        <div>
                            {/* <Text>/ Register On Our Campions /</Text> */}
                            <Title mt={20} size={50} py={10} fw={700}>Register Now to start your Campaign</Title>

                            <Text py={8} >
                                Ad Pulse Network offers a streamlined path to success, providing comprehensive solutions for all your
                                website advertising needs. Simply click the register button and provide basic details to access a wealth
                                of opportunities. Our user-friendly registration swiftly takes you to the advertiser dashboard, where numerous
                                benefits await.
                            </Text>
                            <Text py={8} >
                                Ad Pulse Network&apos;s primary objective is to grow your business and guide you toward remarkable success!
                            </Text>
                            {/* <Text py={8} >
                                Effortlessly monetize your website or blog traffic with our platform.
                            </Text>
                            <Text py={8} >
                                Benefit from high-quality, convertible traffic to boost your business.
                            </Text>
                            <Text py={8} >
                                Utilize our advanced ad formats to maximize your advertising potential.
                            </Text> */}
                        </div>
                        <div>
                            <Button bg={"white"} c={"black"} className={classes.btn}>
                                Get started &nbsp; <IconMathGreater size={15} />
                            </Button>
                        </div>
                    </Box>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default RegisterCampion
