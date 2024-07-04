'use client'
import { Button, Container, Flex, Grid, Paper, Text, Title } from '@mantine/core';
import React from 'react';
import classes from './features.module.css';
import { IconHandClick } from '@tabler/icons-react';
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
                <Title  py={18} fw={400}  order={1} className={font.className}>Connect with potential customers instantly when they search for your product. Boost your visibility
                    and reach with targeted advertising.
                </Title>
            </Paper>

            <Paper className={classes.paper} py={10}>
                <Grid grow gutter="lg">
                    <Grid.Col span={4} className={classes.boxes} >
                        <Title order={3} fw={500} c="black" className={font.className}>CPC (Cost Per Click)</Title>
                        <Text size="md" fw={500} py={15} className={classes.para} >Connect with potential customers instantly when they search for your product. Boost your
                            visibility and reach with targeted advertising.</Text>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={10} fw={100} >
                                <IconHandClick />
                            </Container>
                        </Paper>
                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Title order={3} fw={500} c="black" >Traffic from direct publishers</Title>
                        <Text size="md" fw={500} py={15} className={classes.para}>Connect with potential customers instantly when they search for your product. Boost your
                            visibility and reach with targeted advertising.</Text>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={10} fw={100} >
                                <IconHandClick />
                            </Container>
                        </Paper>
                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Title order={3} fw={500} c="black" >Advanced targeting</Title>
                        <Text size="md" fw={500} py={15} className={classes.para}>Connect with potential customers instantly when they search for your product. Boost your
                            visibility and reach with targeted advertising.</Text>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={10} fw={100} >
                                <IconHandClick />
                            </Container>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Paper>
            

            <Paper className={classes.paper} py={10}>
                <Grid grow gutter="lg">
                    <Grid.Col span={4} className={classes.boxes} >
                        <Title order={3} fw={500} c="black" className={font.className}>CPC (Cost Per Click)</Title>
                        <Text size="md" fw={500} py={15} className={classes.para} >Connect with potential customers instantly when they search for your product. Boost your
                            visibility and reach with targeted advertising.</Text>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={10} fw={100} >
                                <IconHandClick />
                            </Container>
                        </Paper>
                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Title order={3} fw={500} c="black" >Traffic from direct publishers</Title>
                        <Text size="md" fw={500} py={15} className={classes.para}>Connect with potential customers instantly when they search for your product. Boost your
                            visibility and reach with targeted advertising.</Text>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={10} fw={100} >
                                <IconHandClick />
                            </Container>
                        </Paper>
                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Title order={3} fw={500} c="black" >Advanced targeting</Title>
                        <Text size="md" fw={500} py={15} className={classes.para}>Connect with potential customers instantly when they search for your product. Boost your
                            visibility and reach with targeted advertising.</Text>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={10} fw={100} >
                                <IconHandClick />
                            </Container>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Paper>
            

            <Paper className={classes.paper} py={10}>
                <Grid grow gutter="lg">
                    <Grid.Col span={4} className={classes.boxes} >
                        <Title order={3} fw={500} c="black" className={font.className}>CPC (Cost Per Click)</Title>
                        <Text size="md" fw={500} py={15} className={classes.para} >Connect with potential customers instantly when they search for your product. Boost your
                            visibility and reach with targeted advertising.</Text>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={10} fw={100} >
                                <IconHandClick />
                            </Container>
                        </Paper>
                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Title order={3} fw={500} c="black" >Traffic from direct publishers</Title>
                        <Text size="md" fw={500} py={15} className={classes.para}>Connect with potential customers instantly when they search for your product. Boost your
                            visibility and reach with targeted advertising.</Text>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={10} fw={100} >
                                <IconHandClick />
                            </Container>
                        </Paper>
                    </Grid.Col>

                    <Grid.Col span={4} className={classes.boxes}>
                        <Title order={3} fw={500} c="black" >Advanced targeting</Title>
                        <Text size="md" fw={500} py={15} className={classes.para}>Connect with potential customers instantly when they search for your product. Boost your
                            visibility and reach with targeted advertising.</Text>
                        <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
                            <Container p={10} fw={100} >
                                <IconHandClick />
                            </Container>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Paper>

        </Container>
    )
}

export default Features