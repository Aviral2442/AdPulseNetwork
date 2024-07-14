"use client";
import React from 'react';
import { Image, SimpleGrid, Text, Title } from '@mantine/core';
import { Manrope, Sora } from 'next/font/google';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import clsx from 'clsx';
import classes from './brands.module.css';

const font = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const fonts = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

const Brands = () => {
    return (
        <div className={classes.wrapper}>
            <Text className={fonts.className}>/partners/</Text>
            <Title fw={400} order={1} mb={19} className={clsx(classes.Title, font.className)}>Big Brands & Exclusive Advertisers</Title>
            <SimpleGrid
            py={25}
                className={classes.grid}
                cols={{ base: 1, sm: 2, lg: 5 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
            >
                {['011.png', '022.png', '033.png', '044.png', '055.png'].map((src, index) => (
                    <div key={index} className={classes.imageWrapper}>
                        <Image src={src} alt={`Brand ${index + 1}`} fit="contain" />
                    </div>
                ))}
            </SimpleGrid>

            <Carousel

                withIndicators
                className={classes.carousel}
                classNames={classes}
                height={190}
                withControls={false}                
                loop
                align="center"
            >
                {['01.png', '02.png', '03.png', '04.png', '05.png'].map((src, index) => (
                    <Carousel.Slide key={index}>
                        <div className={classes.imageWrapper1}>
                            <Image src={src} alt={`Brand ${index + 1}`} fit="contain" className={classes.image1} />
                        </div>
                       

                    </Carousel.Slide>
                ))}

            </Carousel>
            
        </div>
    );
}

export default Brands;
