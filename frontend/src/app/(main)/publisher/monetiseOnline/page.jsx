'use client'
import { Container, Grid, Image, Paper, Text, Title } from '@mantine/core';
import React from 'react';
import classes from './monetiseOnline.module.css';
import { IconHandClick } from '@tabler/icons-react';
import { Manrope, Sora } from 'next/font/google';

const font = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const fonts = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

const MonetiseOnline = () => {
  return (
    <Container fluid className={classes.container} py={30} >

      {/* <Paper className={classes.paper}>
        <Text py={5} size="xs" >/ AD NETWORK FEATURES /</Text>
      </Paper> */}

      <Paper className={classes.topHeading}>
        <Title py={18} fw={400} order={1} className={font.className}>Monetize Any Type of Online Traffic</Title>
        <Text fw={300} className={font.className}>We generate revenue from traffic across all categories and geographic locations.</Text>
      </Paper>

      <Paper className={classes.paper} py={15}>
        <Grid grow gutter="lg">
          <Grid.Col span={4} className={classes.boxes} >
            <Image src="UserExperience.png" alt='UserExperience' />
          </Grid.Col>

          <Grid.Col span={4} className={classes.boxes}>
            {/* <Paper p={5} bg={"#F0F2F4"} className={classes.icons} w={55} h={55} >
              <Container p={10} fw={100} >
                <IconHandClick />
              </Container>
            </Paper> */}
            <Title order={3} fw={500} c="black" py={12} >Advanced Targeting</Title>
            <Text size="md" fw={500} className={classes.para}>Advanced targeting leverages data and technology to precisely reach specific audiences, enhancing marketing efficiency and effectiveness for better results.</Text>

          </Grid.Col>
        </Grid>
      </Paper>

    </Container>
  )
}

export default MonetiseOnline