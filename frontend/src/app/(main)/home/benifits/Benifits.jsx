'use client'
import React from 'react'
import { Manrope, Sora } from 'next/font/google';
import { Card, Container, Group, Image, Paper, rem, SimpleGrid, Tabs, Text, Title } from '@mantine/core';
import classes from './benefits.module.css';
import { IoCheckboxOutline } from "react-icons/io5";

const font = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const fonts = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

const Benifits = () => {
  return (
    <>
      <div className={classes.section}>
        <Container className={classes.Container}  >
          <Text className={fonts.className} c="white" mt="md">
            / ADVERTISER & PUBLISHER BENEFITS  /
          </Text>
          <Title fw={400} order={1} mb={19} c="white" className={font.className}>
            Traffic originating from various countries worldwide
          </Title>
        </Container>
        <Paper mt={20} spacing="xl" bg="#333333">
          <Tabs variant="unstyled"  defaultValue="Advertiser" classNames={classes} >
            <Tabs.List className={classes.tabinner}>
              <Tabs.Tab value="Advertiser" >
                Advertiser
              </Tabs.Tab>
              <Tabs.Tab value="Publisher"  >
                Publisher
              </Tabs.Tab>

            </Tabs.List>
            <Tabs.Panel value="Advertiser" >
              <SimpleGrid
                cols={{ base: 1, sm: 1, lg: 3 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
                className={classes.tabinn}
              >
                <Card
                  shadow="sm"
                  padding="xl"
                  component="a"
                  href=""
                  target="_blank"
                  className={fonts.className}
                >
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      h={260}

                      alt="No way!"
                    />
                  </Card.Section>

                  <Text fw={600} size="lg" mt="md" >

                    Expand Your Business Fastly & Smartly
                  </Text>

                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' />   Quick Account Registration Process
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Get Started with $25 only
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Multiple cutting-edge Ad Formats
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> CPA, CPA, and CPM Pricing Model
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Powerful Targeting Capabilities
                  </Text>
                </Card>
                <Card
                  shadow="sm"
                  padding="xl"
                  component="a"
                  href=""
                  target="_blank"
                  className={fonts.className}
                >
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      h={260}    
                      alt="No way!"
                    />
                  </Card.Section>

                  <Text fw={600} size="lg" mt="md" >
                    Spend Your Money Wisely & Effectively
                  </Text>

                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' />   Low Bids and High Conversions
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Zero Platform Commission
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Targeted Advertising for Low Cost
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Global Reach with Convertible Traffic
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> No Hidden or Unnecessary Charges
                  </Text>
                </Card>
                <Card
                  shadow="sm"
                  padding="xl"
                  component="a"
                  href=""
                  target="_blank"
                  className={fonts.className}
                >
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      h={260}

                      alt="No way!"
                    />
                  </Card.Section>

                  <Text fw={600} size="lg" mt="md"  >
                    Avail Ad Services Promptly & Securely
                  </Text>

                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' />   We Provide 24*7 Customer Support
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Safe and Easy Payment Methods
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Data-Driven Campaign Reports
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Step-by-Step Advertising Guidance
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' />  Multiple Options to Fund Your Wallet
                  </Text>
                </Card>
              </SimpleGrid>
            </Tabs.Panel>

            <Tabs.Panel value="Publisher" >
              <SimpleGrid
                cols={{ base: 1, sm: 1, lg: 3 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
                className={classes.tabinn}
              >
                <Card
                  shadow="sm"
                  padding="xl"
                  component="a"
                  href=""
                  target="_blank"
                  className={fonts.className}
                >
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      h={260}

                      alt="No way!"
                    />
                  </Card.Section>

                  <Text fw={600} size="lg" mt="md" >

                    Monetize Traffic Promptly & Securely
                  </Text>

                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' />  Quick Traffic Monetization Services
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Global Level Monetization Platform
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Monetizes Traffic from Most Niches
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' />  Multiple cutting-edge Ad Formats
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Direct Payments to Your Bank Accounts
                  </Text>
                </Card>
                <Card
                  shadow="sm"
                  padding="xl"
                  component="a"
                  href=""
                  target="_blank"
                  className={fonts.className}
                >
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      h={260}

                      alt="No way!"
                    />
                  </Card.Section>

                  <Text fw={600} size="lg" mt="md" >
                    Boost Revenue Wisely & Effectively
                  </Text>

                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' />  Competitive Bids for Higher Earnings

                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' />  Zero Platform Commission
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> On-Time Payments, Twice a Month
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Monetize All Kinds of Domains
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Anti-Adblock Ads
                  </Text>
                </Card>
                <Card
                  shadow="sm"
                  padding="xl"
                  component="a"
                  href=""
                  target="_blank"
                  className={fonts.className}
                >
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      h={260}

                      alt="No way!"
                    />
                  </Card.Section>

                  <Text fw={600} size="lg" mt="md"  >
                    Get Quality Services Fastly & Smartly
                  </Text>

                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' />   We Provide 24* 7 Customer Support

                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Safe and Easy Payment Methods
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Data-Driven Campaign Reports
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' /> Step-by-Step Advertising Guidance
                  </Text>
                  <Text mt="xs" c="black" size="sm" fw={500}>
                    <IoCheckboxOutline
                      style={{ width: rem(13), height: rem(13) }}
                      color='red' />  Multiple Options to Fund Your Wallet
                  </Text>
                </Card>
              </SimpleGrid>
            </Tabs.Panel>

          </Tabs>
        </Paper>
      </div>
    </>
  )
}

export default Benifits