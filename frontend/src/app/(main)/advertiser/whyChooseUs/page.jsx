'use client'
import { Button, Container, Flex, Grid, Image, Paper, Text, Title } from '@mantine/core';
import React from 'react';
import classes from './whyChooseUs.module.css';
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
                <Title py={18} fw={400} order={1} className={font.className}>Why choose us</Title>
            </Paper>

            <Paper className={classes.paper} py={15}>
                <Text>Choose Ad Pulse Network for Unparalleled Performance and Exceptional Results for All Advertising Verticals.</Text>
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
                        <Text size="md" fw={500} className={classes.para} >CPC (Cost Per Click) is an online advertising model where advertisers pay each time a user clicks on their ad.</Text>
                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"SelfServiceforadvertisers.png"} alt='SelfServiceforadvertisers' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >Self-Serve Platform</Title>
                        <Text size="md" fw={500} className={classes.para}>Traffic from direct publishers refers to the visits originating directly from sites that publish your content, driving targeted and relevant audience to your platform.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"MultipleAdFormats.png"} alt='MultipleAdFormats' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >Multiple Ad Formats</Title>
                        <Text size="md" fw={500} className={classes.para}>Advanced targeting leverages data and technology to precisely reach specific audiences, enhancing marketing efficiency and effectiveness for better results.</Text>

                    </Grid.Col>
                </Grid>
            </Paper>


            <Paper className={classes.paper} py={15}>
                <Grid grow gutter="lg">
                    <Grid.Col span={4} className={classes.boxes} >
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"24_7Support.png"} alt='24_7Support' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" className={font.className} py={12} >24*7 Support</Title>
                        <Text size="md" fw={500} className={classes.para} >Ensure your ads reach their full potential with uninterrupted visibility, maximizing audience engagement and campaign success.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"MultiplePaymentOptions.png"} alt='MultiplePaymentOptions' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12}>Multiple Payment Options</Title>
                        <Text size="md" fw={500} className={classes.para}>Real-time detailed statistics offer up-to-the-minute data analysis, providing accurate insights and trends for informed decision-making and performance tracking.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"Anti-Adblock.png"} alt='Anti-Adblock' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >Anti-Adblock</Title>
                        <Text size="md" fw={500} className={classes.para}>CPM (Cost Per Mille) is an advertising metric that denotes the cost of 1,000 ad impressions. It helps advertisers gauge ad cost efficiency.</Text>

                    </Grid.Col>
                </Grid>
            </Paper>

        </Container>
    )
}

export default WhyChooseUs