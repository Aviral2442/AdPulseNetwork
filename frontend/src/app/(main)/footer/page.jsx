'use client'
import React from 'react'
import { Text, Container, ActionIcon, Group, rem, Paper, Anchor, SimpleGrid, Title, TextInput, Button, Textarea, Divider, Grid } from "@mantine/core"
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
  IconBrandXFilled
} from "@tabler/icons-react"
import classes from "./FooterLinks.module.css"
import { FaFacebookF, FaFacebookSquare, FaLinkedin, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import clsx from 'clsx';
import { Manrope, Sora } from 'next/font/google';

const font = Sora({ subsets: ['latin'], weight: ['400'] });
const fonts = Manrope({ subsets: ['latin'], weight: ['300'] });

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



  return (
    <>
      <div className={classes.wrapper1}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div >
            <Text mt={80} mb={20} c={"white"} className={fonts.className}>/get in touch/</Text>

            <Title mb={30} className={clsx(classes.title1, font.className)}>We are always ready to help you and answer your questions</Title>
            <Text className={clsx(classes.description, fonts.className)} pt={10} pb={40}>
              Pacific hake false travelly queen parrotfish black prickel back moshahead warbonnet swepper! Grettinf sweeper.
            </Text>
            <Grid className={fonts.className}>
              <Grid.Col span={6}>
                <Title fz={19} c="white">Call Center</Title>
                <Text fz={14} c="white" mt="sm" mb="lg">800100 975 20 34 <br />
                  + (123) 1800-234-5678</Text>

              </Grid.Col>
              <Grid.Col span={6}>
                <Title fz={19} c="white">Our Location</Title>
                <Text fz={14} c="white" mt="sm" mb="lg">USA, New York – 1060 <br />
                  Str. First Avenue 1</Text>
              </Grid.Col>
            </Grid>
            <Grid mt={20} className={fonts.className}>
              <Grid.Col span={6}>
                <Title fz={19} c="white">Email</Title>
                <Text fz={14} c="white" mt="lg" mb="lg">neuros@mail.co</Text>

              </Grid.Col>
              <Grid.Col span={6}>
                <Title fz={19} c="white">Social network </Title>
                <Paper bg="#333333" mt="md" >
                  <Anchor href='https://www.facebook.com/adpulsenetwork' c="#FFFFFF" size="md">
                    <FaFacebookF size={22} className={classes.socialIcons} />
                  </Anchor>
                  <Anchor ml="md" href='https://www.instagram.com/adpulsenetwork/' c="#FFFFFF" size="md">
                    <RiInstagramFill size={25} className={classes.socialIcons} />
                  </Anchor>
                  <Anchor ml="md" href='https://www.linkedin.com/company/ad-pulse-network/' c="#FFFFFF" size="md">
                    <FaLinkedin size={25} className={classes.socialIcons} />
                  </Anchor>
                  <Anchor ml="md" href='https://x.com/Adpulsenetwork' c="#FFFFFF" size="md">
                    <IconBrandXFilled size={25} className={classes.socialIcons} />
                  </Anchor>
                  <Anchor ml="md" href='https://www.tiktok.com/@adpulsenetwork' c="#FFFFFF" size="md">
                    <FaTiktok size={20} className={classes.socialIcons} />
                  </Anchor>
                  <Anchor ml="md" href='https://www.youtube.com/@adpulssenetwork' c="#FFFFFF" size="md">
                    <IconBrandYoutubeFilled size={25} className={classes.socialIcons} />
                  </Anchor>
                </Paper>
              </Grid.Col>
            </Grid>
            {/* <ContactIconsList /> */}

            {/* <Group mt="xl">{icons}</Group> */}
          </div>
          <div className={clsx(classes.form, fonts.className)}>
            <Title c="black" className={font.className}>Get in Touch</Title>
            <Text c="black" mt="sm" mb="lg" >
              Define your goals and identify areas where AI can add value to you business
            </Text>



            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Subject"
              placeholder=""
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={6}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-start" mt="md">
              <Button className={classes.control}>Send a message</Button>
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
      <Group  justify="space-between" className={classes.footerInner}>
          <Text  fz={14}>©Neuros 2024. All rights reserved.</Text>
          <div>
            <Anchor fz={14} href='#'>Terms of use</Anchor>
            <Anchor  fz={14} href='#'>Privacy </Anchor>
            <Anchor  fz={14} href='#'>Environmental Policy</Anchor>
          </div>
        </Group>
    </>
  );
}

export default Footer