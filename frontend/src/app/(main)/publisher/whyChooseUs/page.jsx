'use client'
import { Button, Container, Flex, Grid, Image, Paper, Text, Title } from '@mantine/core';
import React from 'react';
import classes from './whychoose.module.css';
import { IconHandClick } from '@tabler/icons-react';
import { Manrope, Sora } from 'next/font/google';

const font = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const fonts = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

const WhyChooseUs = () => {
    return (
        <Container fluid className={classes.container} >

            {/* <Paper className={classes.paper}>
                <Text py={5} size="xs" >/ AD NETWORK FEATURES /</Text>
            </Paper> */}

            <Paper className={classes.topHeading}>
                <Title py={38} ta={"center"} fw={400} order={1} className={font.className}>Why Choose AD PULSE NETWORK as the Top Choice for Publishers?</Title>
                {/* <Text fw={300} order={1} className={font.className}>Why Choose AD PULSE NETWORK as the Top Choice for Publishers?</Text> */}
            </Paper>

            <Paper className={classes.paper} py={15}>
                <Grid grow gutter="lg">
                    <Grid.Col span={4} className={classes.boxes} >
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"100Coverage.png"} alt='100Coverage' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} className={font.className}>100% Coverage</Title>
                        <Text size="md" fw={500} className={classes.para} >We provide comprehensive coverage for both desktop and mobile traffic worldwide, ensuring publishers a steady stream of revenue.</Text>
                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"RevenueOptimization.png"} alt='RevenueOptimization' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >Revenue Optimization</Title>
                        <Text size="md" fw={500} className={classes.para}>Boost your earnings across both desktop and mobile traffic with programmatic ad optimization technology.
                        </Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"EasyAdCode.png"} alt='EasyAdCode' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >Easy Ad Code
                        </Title>
                        <Text size="md" fw={500} className={classes.para}>Maximize your revenue on both desktop and mobile platforms using programmatic ad optimization technology.</Text>

                    </Grid.Col>
                </Grid>
            </Paper>


            <Paper className={classes.paper} py={15}>
                <Grid grow gutter="lg">
                    <Grid.Col span={4} className={classes.boxes} >
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"MonetizeAllTraffic.png"} alt='MonetizeAllTraffic' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" className={font.className} py={12} >Monetize All Traffic</Title>
                        <Text size="md" fw={500} className={classes.para} >Our platform generates revenue from a diverse range of high-quality, authentic traffic from nearly every corner of the globe.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"SafeAds.png"} alt='SafeAds' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12}>Safe Ads</Title>
                        <Text size="md" fw={500} className={classes.para}>Ad Pulse Network reviews all ads before displaying them on your websites to ensure your safety and data security.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"HighestPayingAds.png"} alt='HighestPayingAds' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >Highest Paying Ads</Title>
                        <Text size="md" fw={500} className={classes.para}>Ad Pulse Network helps publishers obtain the highest-paying ads for their targeted locations and niches.</Text>

                    </Grid.Col>
                </Grid>
            </Paper>

        </Container>
    )
}

export default WhyChooseUs