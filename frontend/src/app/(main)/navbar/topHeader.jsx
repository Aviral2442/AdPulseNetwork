'use client'
import { Anchor, Container, Group, Text } from '@mantine/core'
import classes from './navbar.module.css'
import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from 'react-icons/io5'

const TopHeader = () => {
    return (
        <Container size="xl" p={2} c="white" bg={'#333333'} mt={8} className={classes.TopHeader} >
            <Group justify="space-between" px={15} >
                <Text  className={classes.TopHeaderDetails} >Email: <span className={classes.socialIcons}> contact@adpulsenetwork.com </span> </Text>
                <div >
                    <Anchor href='https://www.facebook.com/adpulsenetwork' c="#FFFFFF" size="sm">
                        <FaFacebook size={26} className={classes.socialIcons} />
                    </Anchor>
                    <Anchor href='https://www.instagram.com/adpulsenetwork/' c="#FFFFFF" size="sm">
                        <FaInstagramSquare size={25} className={classes.socialIcons} />
                    </Anchor>
                    <Anchor href='https://www.linkedin.com/company/ad-pulse-network/' c="#FFFFFF" size="sm">
                        <FaLinkedin size={25} className={classes.socialIcons} />
                    </Anchor>
                    <Anchor href='https://x.com/Adpulsenetwork' c="#FFFFFF" size="sm">
                        <FaSquareXTwitter size={25} className={classes.socialIcons} />
                    </Anchor>
                    <Anchor href='https://www.tiktok.com/@adpulsenetwork' c="#FFFFFF" size="sm">
                        <AiFillTikTok size={27} className={classes.socialIcons} />
                    </Anchor>
                    <Anchor href='https://www.youtube.com/@adpulssenetwork' c="#FFFFFF" size="sm">
                        <IoLogoYoutube size={27} className={classes.socialIcons} />
                    </Anchor>
                </div>
            </Group>
        </Container>
    )
}

export default TopHeader