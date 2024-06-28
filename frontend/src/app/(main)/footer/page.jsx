'use client'
import React from 'react'
import { Text, Container, ActionIcon, Group, rem, Paper, Anchor } from "@mantine/core"
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram
} from "@tabler/icons-react"
import classes from "./FooterLinks.module.css"

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
      <footer className={classes.footer}>
        <Container className={classes.inner} fluid>
          <div className={classes.groups}>{groups}</div>
        </Container>
        <Container className={classes.afterFooter} fluid>
          <Paper shadow="xs" className={classes.afterFooterInner}>
            <Text c="dimmed" size="sm">
              ©Neuros 2024. All rights reserved.
            </Text>
            <Group gap={0}
              className={classes.social}
              justify="flex-end"
              wrap="nowrap">
              <Anchor href='#' c="dimmed" size="sm">
                Terms of use
              </Anchor>
              <Anchor href='#' c="dimmed" size="sm">
                Privacy
              </Anchor>
              <Anchor href='#' c="dimmed" size="sm">
                Environmental Policy
              </Anchor>
            </Group>
            {/* <Group
              gap={0}
              className={classes.social}
              justify="flex-end"
              wrap="nowrap"
            >
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandTwitter
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandYoutube
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandInstagram
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group> */}
          </Paper>
        </Container>

      </footer>
    </>
  );
}

export default Footer