'use client'
import { Container, Grid, Image, Paper, Text, Title } from '@mantine/core';
import React from 'react';
import classes from './features.module.css';
import { Manrope, Sora } from 'next/font/google';

const font = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const fonts = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

const Features = () => {
    return (
        <Container fluid className={classes.container} >

            <Paper className={classes.paper}>
                <Text py={5} size="xs" >/ AD NETWORK FEATURES /</Text>
            </Paper>

            <Paper className={classes.topHeading}>
                <Title py={18} fw={400} order={1} className={font.className}>Connect with potential customers instantly when they search for your product. Boost your visibility
                    and reach with targeted advertising.
                </Title>
            </Paper>

            <Paper className={classes.paper} py={15}>
                <Grid grow gutter="lg">
                    <Grid.Col span={4} className={classes.boxes} >
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"cpc.png"} alt='cpc' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} className={font.className}>CPC (Cost Per Click)</Title>
                        <Text size="md" fw={500} className={classes.para} >CPC (Cost Per Click) is an online advertising model where advertisers pay each time a user clicks on their ad.</Text>
                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"directpublishers.png"} alt='directpublishers' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >Traffic From Direct Publishers</Title>
                        <Text size="md" fw={500} className={classes.para}>Traffic from direct publishers refers to the visits originating directly from sites that publish your content, driving targeted and relevant audience to your platform.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"Advancedtargeting.png"} alt='Advancedtargeting' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >Advanced Targeting</Title>
                        <Text size="md" fw={500} className={classes.para}>Advanced targeting leverages data and technology to precisely reach specific audiences, enhancing marketing efficiency and effectiveness for better results.</Text>

                    </Grid.Col>
                </Grid>
            </Paper>


            <Paper className={classes.paper} py={15}>
                <Grid grow gutter="lg">
                    <Grid.Col span={4} className={classes.boxes} >
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"Noblockedimpressions.png"} alt='Noblockedimpressions' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" className={font.className} py={12} >No Blocked Impressions</Title>
                        <Text size="md" fw={500} className={classes.para} >Ensure your ads reach their full potential with uninterrupted visibility, maximizing audience engagement and campaign success.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"Realtimedetailedstatistics.png"} alt='Realtimedetailedstatistics' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12}>Real-Time Detailed Statistics</Title>
                        <Text size="md" fw={500} className={classes.para}>Real-time detailed statistics offer up-to-the-minute data analysis, providing accurate insights and trends for informed decision-making and performance tracking.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"cpm.png"} alt='cpm' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >CPM (Cost Per Mille)</Title>
                        <Text size="md" fw={500} className={classes.para}>CPM (Cost Per Mille) is an advertising metric that denotes the cost of 1,000 ad impressions. It helps advertisers gauge ad cost efficiency.</Text>

                    </Grid.Col>
                </Grid>
            </Paper>


            <Paper className={classes.paper} py={15}>
                <Grid grow gutter="lg">
                    <Grid.Col span={4} className={classes.boxes} >
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"SelfServiceforadvertisers.png"} alt='SelfServiceforadvertisers' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} className={font.className}>Self-Service For Advertisers</Title>
                        <Text size="md" fw={500} className={classes.para} >Empower advertisers with self-service tools to create, manage, and optimize campaigns efficiently, ensuring control and flexibility at their fingertips.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"24_7Support.png"} alt='24_7Support' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12}>24/7 Qualified Support</Title>
                        <Text size="md" fw={500} className={classes.para}>Our 24/7 qualified support team is always here for you, ensuring expert assistance anytime you need it.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"customsolutionsforpartners.png"} alt='customsolutionsforpartners' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >Custom Solutions For Partners</Title>
                        <Text size="md" fw={500} className={classes.para}>Tailored partnerships thrive with our custom solutions, crafted to exceed expectations and drive mutual success. Discover innovation together.</Text>

                    </Grid.Col>
                </Grid>
            </Paper>


            <Paper className={classes.paper} py={15}>
                <Grid grow gutter="lg">
                    <Grid.Col span={4} className={classes.boxes} >
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"Ownadserversolution.png"} alt='Ownadserversolution' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} className={font.className}>Own Adserver Solution</Title>
                        <Text size="md" fw={500} className={classes.para} >Get full control over your ad campaigns with our custom ad server solution. Maximize efficiency and revenue with tailored analytics and targeting options.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"Adnetworksrotation.png"} alt='Adnetworksrotation' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12}>Ad Networks Rotation</Title>
                        <Text size="md" fw={500} className={classes.para}>Ad networks rotation optimizes digital ad performance by alternating between multiple networks, maximizing reach and effectiveness for advertisers.</Text>

                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={2} >
                                <Image src={"MultiplePaymentOptions.png"} alt='MultiplePaymentOptions' />
                            </Container>
                        </Paper>
                        <Title order={3} fw={500} c="black" py={12} >Multiple Payment Options</Title>
                        <Text size="md" fw={500} className={classes.para}>Choose from multiple payment options for convenience and flexibility. Whether you prefer credit cards, bank transfers, or digital wallets, we&apos;ve got you covered!
                        </Text>

                    </Grid.Col>
                </Grid>
            </Paper>

        </Container>
    )
}

export default Features