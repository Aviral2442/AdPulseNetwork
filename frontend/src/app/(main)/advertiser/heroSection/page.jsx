'use client'
import React from 'react'
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from "@mantine/core"
import { IconCheck, IconSquareCheck } from "@tabler/icons-react"
import classes from "./heroSection.module.css"

const HeroSection = () => {
    return (
        <Container size="lg">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title} py={10} >
                        {/* <span className={classes.highlight}> */}
                        Online Advertising Platform
                        {/* </span> */}
                        {/* React <br />{" "} components library */}
                    </Title>
                    <Title className={classes.subTitle} >Reach Your Audience with AD Pulse Network Ads!</Title>
                    <Text c="dimmed" mt="md">
                        Ad Pulse Network simplifies online advertising for all business types. Our platform is the ultimate solution for your
                        business growth, offering the best advertising solutions whether you're a small online store or a multinational
                        company.
                    </Text>
                    <Text c="dimmed" mt="md">
                        Sign up today to easily choose, set, and launch your first PPC campaign!
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            // <ThemeIcon size={25} radius="xl">
                            <IconSquareCheck
                                style={{ width: rem(12), height: rem(12) }}
                                stroke={1.5}
                            />
                            // </ThemeIcon>
                        }
                    >
                        <Group mt={30}>
                            <div>
                                <List.Item>
                                    <b>Register</b>
                                </List.Item>
                            </div>
                            <div>
                                <List.Item pl={155}>
                                    <b>Ad Funds</b>
                                </List.Item>
                            </div>
                        </Group>
                        <Group mt={15}>
                            <div>
                                <List.Item>
                                    <b>Choose Ad Type</b>
                                </List.Item>
                            </div>
                            <div>
                                <List.Item pl={100} >
                                    <b>Set Bid</b>
                                </List.Item>
                            </div>
                        </Group>
                        {/* <List.Item>
                            <b>Register</b>
                        </List.Item>
                        <List.Item>
                            <b>Choose Ad Type</b>
                        </List.Item> */}
                    </List>

                    <Group mt={30}>
                        {/* <Button radius="xl" size="md" className={classes.control}>
                            Get started
                        </Button> */}
                        <Button
                            variant="default"
                            radius="xl"
                            size="md"
                            className={classes.control}
                        >
                            Get started
                        </Button>
                    </Group>
                </div>
                <Image src="Online-Advertising-Platform.jpg" className={classes.image} />
            </div>
        </Container>
    )
}

export default HeroSection