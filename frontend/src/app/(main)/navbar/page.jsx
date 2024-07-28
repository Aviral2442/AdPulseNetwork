'use client';
import React, { useState } from 'react';
import { Group, Button, UnstyledButton, Text, ThemeIcon, Divider, Box, Burger, Drawer, ScrollArea, rem, useMantineTheme, Card, Grid, Image, Menu, Anchor, Container } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconNotification, IconCode, IconBook, IconChartPie3, IconFingerprint, IconCoin, IconCalendarMonth } from "@tabler/icons-react"
import { Modal } from '@mantine/core';
import classes from "./navbar.module.css"
import TopHeader from './topHeader';
import Link from 'next/link';
import { Manrope } from 'next/font/google';
import clsx from 'clsx';

const fonts = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

// const mockdata = [
//   {
//     icon: IconCode,
//     title: "Open source",
//     description: "This Pokémon’s cry is very loud and distracting"
//   },
//   {
//     icon: IconCoin,
//     title: "Free for everyone",
//     description: "The fluid of Smeargle’s tail secretions changes"
//   },
//   {
//     icon: IconBook,
//     title: "Documentation",
//     description: "Yanma is capable of seeing 360 degrees without"
//   },
//   {
//     icon: IconFingerprint,
//     title: "Security",
//     description: "The shell’s rounded shape and the grooves on its."
//   },
//   {
//     icon: IconChartPie3,
//     title: "Analytics",
//     description: "This Pokémon uses its flying ability to quickly chase"
//   },
//   {
//     icon: IconNotification,
//     title: "Notifications",
//     description: "Combusken battles with the intensely hot flames it spews"
//   }
// ]

const Navbar = () => {

  const [
    drawerOpened,
    { toggle: toggleDrawer, close: closeDrawer }
  ] = useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const theme = useMantineTheme()

  // const links = mockdata.map(item => (
  //   <UnstyledButton className={classes.subLink} key={item.title}>
  //     <Group wrap="nowrap" align="flex-start">
  //       <ThemeIcon size={34} variant="default" radius="md">
  //         <item.icon
  //           style={{ width: rem(22), height: rem(22) }}
  //           color={theme.colors.blue[6]}
  //         />
  //       </ThemeIcon>
  //       <div>
  //         <Text size="sm" fw={500}>
  //           {item.title}
  //         </Text>
  //         <Text size="xs" c="dimmed">
  //           {item.description}
  //         </Text>
  //       </div>
  //     </Group>
  //   </UnstyledButton>
  // ))

  const [opened, { open, close }] = useDisclosure(false);

  // State for active link
  const [activeLink, setActiveLink] = useState('Home');

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <TopHeader />
      <Box p={15}  >
        <Container size="xl" bg={"#fff"} p={4} className={classes.MainHeader} >
          <header className={classes.header}>
            <Group justify="space-around" h="100%">
              <Image src="logo.png" alt="adpulsenetwork" />

              <Group h="100%" gap={0} visibleFrom="sm">
                <Link href="/"
                  className={`${classes.link} ${activeLink === 'Home' ? classes.active : ''}`}
                  onClick={() => handleLinkClick('Home')}>
                  Home
                </Link>
                <Link href="/advertiser"
                  className={`${classes.link} ${activeLink === 'Advertiser' ? classes.active : ''}`}
                  onClick={() => handleLinkClick('Advertiser')}>
                  Advertiser
                </Link>
                <Link href="/publisher"
                  className={`${classes.link} ${activeLink === 'Publisher' ? classes.active : ''}`}
                  onClick={() => handleLinkClick('Publisher')}>
                  Publisher
                </Link>
                <Link href="/pricing-models"
                  className={`${classes.link} ${activeLink === 'Pricing' ? classes.active : ''}`}
                  onClick={() => handleLinkClick('Pricing')}>
                  Pricing Models
                </Link>
                <Link href="/verticals"
                  className={`${classes.link} ${activeLink === 'Verticals' ? classes.active : ''}`}
                  onClick={() => handleLinkClick('Verticals')}>
                  Verticals
                </Link>
              </Group>

              <Modal opened={opened} onClose={close} title="Advertiser and Publisher Login" size="lg" centered>
                <Grid grow >
                  <Grid.Col span={6}>
                    <Card
                      shadow="sm"
                      padding="xl"
                      component="a"
                      href="#"
                      target="_blank"
                    >
                      <Card.Section>
                        <Image
                          src="advertiser_login.png"
                          h={220}
                          alt="No way!"
                          radius="md"
                          fit="contain"
                        />
                      </Card.Section>

                      <Text fw={500} size="lg" mt="md">
                        As Advertiser
                      </Text>

                      <Text mt="xs" c="dimmed" size="sm">
                        Log in to AdPulseNetwork to amplify your brand&apos;s reach & drive targeted traffic effortlessly.
                      </Text>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={6}><Card
                    shadow="sm"
                    padding="xl"
                    component="a"
                    href="#"
                    target="_blank"
                  >
                    <Card.Section>
                      <Image
                        src="publisher_login.png"
                        h={220}
                        alt="No way!"
                        radius="md"
                        fit="contain"
                      />
                    </Card.Section>

                    <Text fw={500} size="lg" mt="md">
                      As Publisher
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm">
                      Log in to AdPulseNetwork to monetize your content & maximize your earning with ease.
                    </Text>
                  </Card></Grid.Col>
                </Grid>
              </Modal>

              <Group visibleFrom="sm">
                <Button variant="filled" c="#333333" color="#F0F2F4" className={classes.logButton} onClick={open}>Log in</Button>
                <Menu width={200} shadow="md">
                  <Menu.Target>
                    <Button varient="filled" c="white" color='black'>Sign up</Button>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item component="a" href="/advertiser-signup" target="_blank">
                      As Advertiser
                    </Menu.Item>
                    <Menu.Item component="a" href="/publisher-signup" target="_blank">
                      As Publisher
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                <Link href="/scheduled-call" >
                  <div className={classes.container}>
                    <button className={clsx(classes.button, fonts.className)}>Scheduled call</button>
                  </div>
                </Link>
              </Group>

              <Burger
                opened={drawerOpened}
                onClick={toggleDrawer}
                hiddenFrom="lg"
              />  
            </Group>
          </header>
        </Container>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="90%"
          padding="md"
          title="AdPulseNetwork"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            <Link href="/" className={classes.link}>
              Home
            </Link>
            <Link href="/advertiser" className={classes.link}>
              Advertiser
            </Link>
            <Link href="/publisher" className={classes.link}>
              Publisher
            </Link>
            <Link href="/pricing-models" className={classes.link}>
              Pricing Models
            </Link>
            <Link href="verticals" className={classes.link}>
              Verticals
            </Link>

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
              <Button>Scheduled call</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    </>
  )
}

export default Navbar