"use client";
import { Container, Grid, Text, Title } from '@mantine/core';
import { Manrope, Sora } from 'next/font/google';
import React from 'react'
import classes from './brands.module.css';

const font = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const fonts = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

const Brands = () => {
    return (

        <Container mt={80} mb={80}>
            <Text className={fonts.className}>/partners/</Text>
            <Title fw={400} order={1} mb={19} className={font.className}>Big Brands & Exclusive Advertisers</Title>
            <Grid grow>
                <Grid.Col span={1.5}>1</Grid.Col>
                <Grid.Col span={1.5}>2</Grid.Col>
                <Grid.Col span={1.5}>3</Grid.Col>
                <Grid.Col span={1.5}>4</Grid.Col>
                <Grid.Col span={1.5}>5</Grid.Col>
                <Grid.Col span={1.5}>6</Grid.Col>
                <Grid.Col span={1.5}>7</Grid.Col>
                <Grid.Col span={1.5}>8</Grid.Col>
            </Grid>
        </Container>
    )
}

export default Brands