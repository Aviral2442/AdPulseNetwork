'use client'
import { Anchor, Container, Group, Text } from '@mantine/core'
import classes from './navbar.module.css'
import React from 'react'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok, IconBrandX, IconBrandYoutube } from '@tabler/icons-react'

const TopHeader = () => {
    return (
        <Container size="xl" p={2} c="white" bg={'#333333'} mt={8} className={classes.TopHeader} >
            <Group justify="space-between" px={40} >
                <Group justify="space-between" gap={50} >
                    <Text size='sm' className={classes.TopHeaderDetails} >Call us: +91 2497534975</Text>
                    <Text size='sm' className={classes.TopHeaderDetails} >Email: contact@adpulsenetworl.com</Text>
                </Group>
                <div >
                    <Anchor href='#' c="#FFFFFF" size="sm">
                    <IconBrandFacebook size={25} className={classes.socialIcons} />
                    </Anchor>
                    <Anchor href='#' c="#FFFFFF" size="sm">
                    <IconBrandInstagram size={25} className={classes.socialIcons} />
                    </Anchor>
                    <Anchor href='#' c="#FFFFFF" size="sm">
                    <IconBrandLinkedin size={25} className={classes.socialIcons} />
                    </Anchor>
                    <Anchor href='#' c="#FFFFFF" size="sm">
                    <IconBrandX size={25} className={classes.socialIcons} />
                    </Anchor>
                    <Anchor href='#' c="#FFFFFF" size="sm">
                    <IconBrandTiktok size={25} className={classes.socialIcons} />
                    </Anchor>
                    <Anchor href='#' c="#FFFFFF" size="sm">
                    <IconBrandYoutube size={25} className={classes.socialIcons} />
                    </Anchor>
                </div>
            </Group>
        </Container>
    )
}

export default TopHeader