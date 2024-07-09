"use client";
import { Container, Grid, Image, Text, Title } from '@mantine/core';
import { Manrope, Sora } from 'next/font/google';
import React from 'react'
import classes from './brands.module.css';
import clsx from 'clsx';

const font = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const fonts = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

const Brands = () => {
    return (

        <div className={classes.wrapper}>

            <Text className={fonts.className}>/partners/</Text>
            <Title fw={400} order={1} mb={19} className={clsx(classes.Title,font.className)}>Big Brands & Exclusive Advertisers</Title>

            <Grid grow gutter="xl">
                <Grid.Col span={1.5} >
                    <Image src="01.png" alt="" />
                </Grid.Col>
                <Grid.Col span={1.5}>
                    <Image src="02.png" alt="" />
                </Grid.Col>
                <Grid.Col span={1.5}>
                    <Image src="03.png" alt="" />
                </Grid.Col>
                <Grid.Col span={1.5}>
                    <Image src="04.png" alt="" />
                </Grid.Col>
                <Grid.Col span={1.5}>
                    <Image src="05.png" alt="" />
                </Grid.Col>
                <Grid.Col span={1.5}>
                    <Image src="05.png" alt="" />
                </Grid.Col>
                <Grid.Col span={1.5}>
                    <Image src="05.png" alt="" />
                </Grid.Col>
                <Grid.Col span={1.5}>
                    <Image src="05.png" alt="" />
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default Brands