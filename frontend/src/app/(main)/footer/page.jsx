'use client';
import React, { useState } from 'react'
import { Text, Container, Group, rem, Paper, Anchor, SimpleGrid, Title, TextInput, Button, Textarea, Divider, Grid, Input } from "@mantine/core"
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
  IconBrandXFilled
} from "@tabler/icons-react"
import classes from "./FooterLinks.module.css"
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { BiLogoTiktok } from "react-icons/bi";
import clsx from 'clsx';
import { Manrope, Sora } from 'next/font/google';
import Brands from './brands/page';

const font = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const fonts = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

const data = [
  {
    title: "Advertisers",
    links: [
      { label: "Launch Campaign", link: "#" },
      { label: "Self-Serve Platform", link: "#" },
      { label: "Advertiser Help", link: "#" },
      { label: "Advertiser FAQs", link: "#" }
    ]
  },
  {
    title: "Publishers",
    links: [
      { label: "Monetize Website", link: "#" },
      { label: "Referral Program", link: "#" },
      { label: "Publisher Help", link: "#" },
      { label: "Publisher FAQs", link: "#" }
    ]
  },
  {
    title: "Terms & Policies",
    links: [
      { label: "Advertiser Terms", link: "#" },
      { label: "Publisher Terms", link: "#" },
      { label: "Privacy Policy", link: "#" },
      { label: "Refund Policy", link: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", link: "#" },
      { label: "Blog", link: "#" },
      { label: "Testimonials", link: "#" },
      { label: "Contact Us", link: "#" }
    ]
  }
]

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function Footer() {
  const groups = data.map(group => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={event => event.preventDefault()}
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })

  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState("")
  const floating = value.trim().length !== 0 || focused || undefined;
  const floating1 = value.trim().length !== 0 || focused || undefined;
  const floating2 = value.trim().length !== 0 || focused || undefined;




  return (
    <>
    <div>
      <Brands />
      <div className={classes.wrapper1}>
        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={50}>
          <div >
            <Text mt={80} mb={20} c={"white"} className={fonts.className}>/get in touch/</Text>

            <Title mb={40} className={clsx(classes.title1, font.className)}>We are always ready to help you and answer your questions</Title>
            <div className={clsx(classes.description, fonts.className)} >
              <Title fz={19} fw={600}>Email </Title>
              <Text mt={5}>contact@adpulsenetwork.com , info@adpulsenetwork.com</Text>
            </div>
            <div className={clsx(classes.description, fonts.className)} >
              <Title fz={19} fw={600}>Location </Title>
              <Text mt={5}> Zurawia, 00-515 Warszawa, Poland. </Text>
            </div>
            <div className={clsx(classes.description, fonts.className)} >
              <Title fz={19} fw={600}>Social network </Title>
              <Paper bg="#333333" mt="md" >
                <Anchor href='https://www.facebook.com/adpulsenetwork' c="#FFFFFF" size="md">
                  <GrFacebookOption size={25} className={classes.socialIcons} />
                </Anchor>
                <Anchor ml="md" href='https://www.instagram.com/adpulsenetwork/' c="#FFFFFF" size="md">
                  <RiInstagramFill size={25} className={classes.socialIcons} />
                </Anchor>
                <Anchor ml="md" href='https://www.linkedin.com/company/ad-pulse-network/' c="#FFFFFF" size="md">
                  <FaLinkedinIn size={25} className={classes.socialIcons} />
                </Anchor>
                <Anchor ml="md" href='https://x.com/Adpulsenetwork' c="#FFFFFF" size="md">
                  <IconBrandXFilled size={25} className={classes.socialIcons} />
                </Anchor>
                <Anchor ml="md" href='https://www.tiktok.com/@adpulsenetwork' c="#FFFFFF" size="md">
                  <BiLogoTiktok size={25} className={classes.socialIcons} />
                </Anchor>
                <Anchor ml="md" href='https://www.youtube.com/@adpulssenetwork' c="#FFFFFF" size="md">
                  <IconBrandYoutubeFilled size={25} className={classes.socialIcons} />
                </Anchor>
              </Paper>
            </div>

          </div>

          <div className={clsx(classes.form, fonts.className)}>
            <Title c="black" className={font.className}>Get in Touch</Title>
            <Text c="black" mt="sm" mb="lg" >
              Define your goals and identify areas where AI can add value to you business
            </Text>



            {/* <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            /> */}
            <Input type='text' mt="lg" placeholder="Full Name" required />

            {/* <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            /> */}
            <Input type='email' mt="lg" placeholder="Email" required />
            {/* <TextInput
              label="Subject"
              placeholder=""
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            /> */}
            <Input type='text' mt="lg" placeholder="Subject" required />
            {/* <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={6}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            /> */}
            <Textarea type='textarea' mt="lg" placeholder="Message" required />

            <Group justify="flex-start" mt="xl">
              <Button className={classes.button}>
                <span className={clsx(classes.span, fonts.className)}>Send a message</span>
              </Button>
            </Group>
          </div>
        </SimpleGrid>
        <Divider mt={130} my="md" />

      </div>
      <footer className={classes.footer}>

        <Container className={classes.inner} fluid>
          <div className={classes.groups}>{groups}</div>
        </Container>
      </footer>

      <div className={classes.sidebar}>
        <Group justify="space-between" className={classes.footerInner}>
          <Text fz={14}>©Neuros 2024. All rights reserved.</Text>
          <div>
            <Anchor fz={14} href='#'>Terms of use</Anchor>
            <Anchor fz={14} href='#'>Privacy </Anchor>
            <Anchor fz={14} href='#'>Environmental Policy</Anchor>
          </div>
        </Group>
      </div>
    </div>
    </>
  );
}

export default Footer