'use client'
import { Container, Divider, Grid, GridCol, Image, SimpleGrid, Text, Title } from '@mantine/core'
import React from 'react'

const Utilize = () => {
    return (
        <div>
            <Container fluid p={10} >
                {/* <Title pt={50} pb={8} ta={"center"} fw={400} order={1}>Create Your Campaign with a Suitable Pricing Model and Enjoy Optimal Results</Title> */}

                <div>
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 2 }}
                        p={100}
                    >
                        <div>
                            <Title fw={500} size={60}>Create Your Campaign with a Suitable Pricing Model and Enjoy Optimal Results</Title>
                        </div>
                        <div>
                            <Grid>
                                <Grid.Col span={{ base: 4, md: 4, lg: 3 }}>
                                    <Title ta={'center'} py={50} >CPM</Title>
                                </Grid.Col>
                                <Grid.Col span={{ base: 8, md: 8, lg: 9 }}>
                                    <Title pb={8} fw={500} order={3}>CPM</Title>
                                    <Text fz={15} >CPM, or Cost Per Mille, is a pricing model in Ad Pulse Network where advertisers pay for every 1,000 impressions of their ad. This is an excellent option if your main objective is to enhance brand visibility and exposure. Our CPM model enables you to reach a broad audience without necessarily emphasizing clicks or conversions.</Text>
                                </Grid.Col>
                            </Grid>
                            <Divider size="md" pt={10} pb={10} />
                            <Grid>
                                <Grid.Col span={{ base: 4, md: 4, lg: 3 }}>
                                    <Title ta={'center'} py={50} >CPC</Title>
                                </Grid.Col>
                                <Grid.Col span={{ base: 8, md: 8, lg: 9 }}>
                                    <Title pb={8} fw={500} order={3}>CPM</Title>
                                    <Text fz={15} >CPM, or Cost Per Mille, is a pricing model in Ad Pulse Network where advertisers pay for every 1,000 impressions of their ad. This is an excellent option if your main objective is to enhance brand visibility and exposure. Our CPM model enables you to reach a broad audience without necessarily emphasizing clicks or conversions.</Text>
                                </Grid.Col>
                            </Grid>
                            <Divider size="md" pb={10} />
                            <Grid>
                                <Grid.Col span={{ base: 4, md: 4, lg: 3 }}>
                                    <Title ta={'center'} py={50} >CPA</Title>
                                </Grid.Col>
                                <Grid.Col span={{ base: 8, md: 8, lg: 9 }}>
                                    <Title pb={8} fw={500} order={3}>CPM</Title>
                                    <Text fz={15}>CPM, or Cost Per Mille, is a pricing model in Ad Pulse Network where advertisers pay for every 1,000 impressions of their ad. This is an excellent option if your main objective is to enhance brand visibility and exposure. Our CPM model enables you to reach a broad audience without necessarily emphasizing clicks or conversions.</Text>
                                </Grid.Col>
                            </Grid>
                        </div>
                    </SimpleGrid>
                </div>
            </Container>
        </div>
    )
}

export default Utilize