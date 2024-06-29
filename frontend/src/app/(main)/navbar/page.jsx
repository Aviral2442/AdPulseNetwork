'use client';
import React from 'react';
import { Group, Button, UnstyledButton, Text, ThemeIcon, Divider, Box, Burger, Drawer, ScrollArea, rem, useMantineTheme, Card, Grid, Image, Menu, Anchor, Container } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconNotification, IconCode, IconBook, IconChartPie3, IconFingerprint, IconCoin, IconCalendarMonth } from "@tabler/icons-react"
import { Modal } from '@mantine/core';
import classes from "./navbar.module.css"
import TopHeader from './topHeader';

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting"
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes"
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without"
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its."
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase"
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews"
  }
]

const Navbar = () => {

  const [
    drawerOpened,
    { toggle: toggleDrawer, close: closeDrawer }
  ] = useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const theme = useMantineTheme()

  const links = mockdata.map(item => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <TopHeader />
      <Box pb={5} p={15}  >
        <Container size="xl" bg={"#F0F2F4"} p={8} py={15} className={classes.MainHeader} >
          <header className={classes.header}>
            <Group justify="space-around" h="100%">
              <img src="logo.png" alt="Mantine logo" />

              <Group h="100%" gap={0} visibleFrom="sm">
                <Anchor href="#" className={classes.link}>
                  Home
                </Anchor>
                <Anchor href="#" className={classes.link}>
                  Advertiser
                </Anchor>
                <Anchor href="#" className={classes.link}>
                  Publisher
                </Anchor>
                <Anchor href="#" className={classes.link}>
                  Pricing Models
                </Anchor>
                <Anchor href="#" className={classes.link}>
                  Verticals
                </Anchor>
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
                        Log in to AdPulseNetwork to amplify your brand's reach & drive targeted traffic effortlessly.
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
                <Button variant="default" onClick={open}>Log in</Button>
                <Menu width={200} shadow="md">
                  <Menu.Target>
                    <Button>Sign up</Button>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item component="a" href="https://mantine.dev" target="_blank">
                      As Advertiser
                    </Menu.Item>
                    <Menu.Item component="a" href="https://mantine.dev" target="_blank">
                      As Publisher
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                <Button > <IconCalendarMonth size={18} /> &nbsp; Scheduled call</Button>
              </Group>

              <Burger
                opened={drawerOpened}
                onClick={toggleDrawer}
                hiddenFrom="sm"
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

            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              Advertiser
            </a>
            <a href="#" className={classes.link}>
              Publisher
            </a>
            <a href="#" className={classes.link}>
              Pricing Models
            </a>
            <a href="#" className={classes.link}>
              Verticals
            </a>

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