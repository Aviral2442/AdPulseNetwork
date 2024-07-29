'use client'
import { Container, Grid, Image, Paper, Text, Title } from '@mantine/core';
import React from 'react';
import classes from './why.module.css';
import { Manrope, Sora } from 'next/font/google';

const font = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const fonts = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

const WhyUs = () => {
    return (
        <Container fluid className={classes.container} >

            {/* <Paper className={classes.paper}>
                <Text py={5} size="xs" >/ AD NETWORK FEATURES /</Text>
            </Paper> */}

            <Paper className={classes.topHeading}>
                <Title py={18} fw={400} order={1} className={font.className}>Why choose us</Title>
                <Text pt={10} pb={20} fw={300} order={1} className={font.className}>Choose Ad Pulse Network for Unparalleled Performance and Exceptional Results for All Advertising Verticals.</Text>
            </Paper>

            <Paper className={classes.paper} py={15}>
                <Grid grow gutter="lg">
                    <Grid.Col span={4} className={classes.boxes} >
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"AdvancedSecurityOptions.png"} alt='AdvancedSecurityOptions' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} className={font.className}>Advanced Security Options</Title>
                        <Text size="md" fw={500} className={classes.para} >Ad Pulse Network employs a robust three-layer security system to ensure complete protection for you and your data. By combining innovative in-house solutions with advanced third-party fraud detection systems, we deliver the most secure advertising experience possible.</Text>
                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"SelfServePlatform.png"} alt='SelfServePlatform' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >Self-Serve Platform</Title>
                        <Text size="md" fw={500} className={classes.para}>Ad Pulse Network is a fully self-service platform that offers diverse traffic from various categories and geographic locations. Our system is user-friendly and designed for easy navigation, enabling users to explore and utilize its features effortlessly.
                        </Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"24_7Support.png"} alt='24_7Support' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >24*7 Support
                        </Title>
                        <Text size="md" fw={500} className={classes.para}>Our expert client support team is here to assist you promptly. Whether you need help setting up your Ad Pulse network account, launching a campaign, or analyzing its results, our support is available at every step of the way.</Text>

                    </Grid.Col>
                </Grid>
            </Paper>


            <Paper className={classes.paper} py={15}>
                <Grid grow gutter="lg">
                    <Grid.Col span={4} className={classes.boxes} >
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"MultiplePaymentOptions.png"} alt='MultiplePaymentOptions' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" className={font.className} py={12} >Multiple Payment Options</Title>
                        <Text size="md" fw={500} className={classes.para} >Our platform supports various secure and legal payment methods to ensure safe and convenient transactions. Advertisers can launch their first PPC campaign with a minimum deposit of just $25.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"IncreasedRevenue.png"} alt='IncreasedRevenue' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12}>Increased Revenue</Title>
                        <Text size="md" fw={500} className={classes.para}>Ad Pulse Network offers the most competitive bids that advertisers pay for the traffic provided by our publishers. With our creative ad formats, global demand, unique offerings, and rapid monetization platform, we can significantly boost your income.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"CompleteTransparency.png"} alt='CompleteTransparency' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >Complete Transparency</Title>
                        <Text size="md" fw={500} className={classes.para}>We prioritize transparency in all our interactions with publishers. At Ad Pulse Network, we believe in fostering a healthy and trustworthy relationship by providing publishers with comprehensive details that align with our policies.</Text>

                    </Grid.Col>
                </Grid>
            </Paper>

        </Container>
    )
}

export default WhyUs