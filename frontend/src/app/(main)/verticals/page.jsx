'use client'
import { Container, Grid, Image, Paper, Text, Title } from '@mantine/core';
import React from 'react';
import classes from './vertical.module.css';
import { Manrope, Sora } from 'next/font/google';
import HeroSection from './heroBanner/page';

/* eslint-disable react/no-unknown-property */ // Disabling a specific ESLint rule for the entire file

// const font = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
// const fonts = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

const Verticals = () => {
  return (
    <div>
      <HeroSection />

      {/* <Container fluid className={classes.container}>

        <Paper className={classes.topHeading}>
          <Title py={50} ta={'center'} fw={400} order={1} className={font.className}>We Cater to All Top Advertising Verticals
          </Title>
        </Paper>

        <Paper className={classes.paper} py={15}>
          <Grid grow gutter="lg">
            <Grid.Col span={4} className={classes.boxes}>
              <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55}>
                <Container p={2}>
                  <Image src="CryptoAdvertising.png" alt="cryptoAdvertising" />
                </Container>
              </Paper>
              <Title order={3} fw={500} c="black" py={12} className={font.className}>Crypto Advertising
              </Title>
              <Text size="md" fw={500} className={classes.para}>Ad Pulse Network, the leading pay-per-click ad network, helps crypto businesses thrive with its cutting-edge advertising solutions. Choosing us as your publishing partner can transform your website or blog, converting your traffic into real cash effortlessly.</Text>
            </Grid.Col>

            <Grid.Col span={4} className={classes.boxes}>
              <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55}>
                <Container p={2}>
                  <Image src="HealthCareAdvertising.png" alt="healthCareAdvertising" />
                </Container>
              </Paper>
              <Title order={3} fw={500} c="black" py={12}>HealthCare Advertising</Title>
              <Text size="md" fw={500} className={classes.para}>We make it easy to advertise healthcare products and medical equipment on our global ad network, helping businesses grow significantly. Publishers with traffic in the healthcare or pharma category can easily join Ad Pulse Network to monetize their traffic and earn real money.</Text>

            </Grid.Col>

            <Grid.Col span={4} className={classes.boxes}>
              <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55}>
                <Container p={2}>
                  <Image src="DatingAdvertising.png" alt="datingAdvertising" />
                </Container>
              </Paper>
              <Title order={3} fw={500} c="black" py={12}>Dating Advertising</Title>
              <Text size="md" fw={500} className={classes.para}>Online dating has become the new normal and a trendy business. Tap into the potential of dating advertising with Ad Pulse Network in this rapidly growing sector. Our cutting-edge ad formats, competitive bids, and global network help dating publishers maximize their earnings.</Text>

            </Grid.Col>
          </Grid>
        </Paper>

        <Paper className={classes.paper} py={15}>
          <Grid grow gutter="lg">
            <Grid.Col span={4} className={classes.boxes}>
              <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55}>
                <Container p={2}>
                  <Image src="GamblingAdvertising.png" alt="gamblingAdvertising" />
                </Container>
              </Paper>
              <Title order={3} fw={500} c="black" className={font.className} py={12}>Gambling Advertising</Title>
              <Text size="md" fw={500} className={classes.para}>Reach avid players worldwide with Ad Pulse Network's targeted gambling advertising solutions. Whether it's online casinos, sports betting, or gambling apps, our diverse ad formats ensure maximum engagement. Join us today to elevate your gambling business to new heights!</Text>

            </Grid.Col>

            <Grid.Col span={4} className={classes.boxes}>
              <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55}>
                <Container p={2}>
                  <Image src="MediaAdvertising.png" alt="mediaAdvertising" />
                </Container>
              </Paper>
              <Title order={3} fw={500} c="black" py={12}>Media Advertising</Title>
              <Text size="md" fw={500} className={classes.para}>Ad Pulse Network stands out as a premier ad network specializing in tailored advertising solutions for media and entertainment industries. Our array includes banner, native, and push ads, recognized for delivering exceptional results to advertisers and publishers alike. We prioritize monetizing media traffic to optimize revenue streams.</Text>

            </Grid.Col>

            <Grid.Col span={4} className={classes.boxes}>
              <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55}>
                <Container p={2}>
                  <Image src="iGamingAdvertising.png" alt="igamingAdvertising" />
                </Container>
              </Paper>
              <Title order={3} fw={500} c="black" py={12}>iGaming Advertising</Title>
              <Text size="md" fw={500} className={classes.para}>At Pulse Network empowers iGaming businesses to achieve new heights. Opting for our ad network can be a game-changer for publishers with virtual gaming traffic. Advertising your Gambling, Sports Betting, and Casino websites on At Pulse Network is straightforward and seamless.</Text>

            </Grid.Col>
          </Grid>
        </Paper>

        <Paper className={classes.paper} py={15}>
          <Grid grow gutter="lg">
            <Grid.Col span={4} className={classes.boxes}>
              <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55}>
                <Container p={2}>
                  <Image src="FinanceAdvertising.png" alt="financeadvertising" />
                </Container>
              </Paper>
              <Title order={3} fw={500} c="black" py={12} className={font.className}>Finance Advertising</Title>
              <Text size="md" fw={500} className={classes.para}>Ad Pulse Network enables you to reach a vast audience with your financial services. Our finance ads are ideal for publishers focusing on business and finance content. In summary, our platform is a haven for both publishers and advertisers in the finance industry.</Text>

            </Grid.Col>

            <Grid.Col span={4} className={classes.boxes}>
              <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55}>
                <Container p={2}>
                  <Image src="AdultAdvertising.png" alt="AdultAdvertising" />
                </Container>
              </Paper>
              <Title order={3} fw={500} c="black" py={12}>Adult Advertising</Title>
              <Text size="md" fw={500} className={classes.para}>Tap into the evergreen demand for adult content with Ad Pulse Network to connect effectively with your target audience. Promote your Adult Dating, Adult Nutra, Adult Games, and other related websites on Ad Pulse Network today to achieve impactful results. Our platform also caters to publishers in the 18+ category.</Text>

            </Grid.Col>

            <Grid.Col span={4} className={classes.boxes}>
              <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55}>
                <Container p={2}>
                  <Image src="ITServicesAdvertising.png" alt="ITServicesAdvertising" />
                </Container>
              </Paper>
              <Title order={3} fw={500} c="black" py={12}>IT Services Advertising</Title>
              <Text size="md" fw={500} className={classes.para}>Ad Pulse Network offers a powerful platform to promote your IT Services to a broad audience. Our ads cater to businesses leveraging online technology across various sectors. Becoming an IT publisher with Ad Pulse Network can also prove advantageous for traffic generators in this field.</Text>

            </Grid.Col>
          </Grid>
        </Paper>

      </Container> */}
    </div>
  )
}

export default Verticals;
