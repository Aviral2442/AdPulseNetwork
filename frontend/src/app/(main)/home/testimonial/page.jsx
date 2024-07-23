"use client";
import React from 'react'
import { Card, Center, Container, Group, Rating, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './testimonial.module.css';
import { Manrope, Sora } from 'next/font/google';

const font = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const fonts = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500'] });

const Testimonials = () => {
  return (
    <Container fluid className={classes.Container}  >
      <Center>
        <Rating value={5} fractions={2} readOnly size="xl" />
      </Center>
      <Title mt={20} order={1} align="center" fw={400} className={font.className}>User stories:hear what others love <br /> about our Wordpress themes!</Title>
      <SimpleGrid mt={20}
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        <div>
          <Card withBorder padding="xl" radius="xl" >
            <Text className={font.className} fz="lg" fw={400} mt="md">
              manojchouh
            </Text>
            <Rating value={5} fractions={2} readOnly size="xs" />

            <Text className={fonts.className} fz="sm" fw={400} c="#333333" mt={10}>
              Nice theme with excellent support from the developers. All of my doubts and requests were fixed within a day.
            </Text>
          </Card>
          <Card withBorder mt={16} padding="xl" radius="xl" >
            <Text className={font.className} fz="lg" fw={400} mt="md">
              elkab 3
            </Text>
            <Rating value={5} fractions={2} readOnly size="xs" />

            <Text className={fonts.className} fz="sm" fw={400} c="#333333" mt={10}>
              Amazing customer support. I
              had one modifications and the
              customer support was super
              helpful and quick to answer
              them both.
            </Text>
          </Card>
          <Card withBorder mt={16} padding="xl" radius="xl" >
            <Text className={font.className} fz="lg" fw={400} mt="md">
              tolunayc
            </Text>
            <Rating value={5} fractions={2} readOnly size="xs" />

            <Text className={fonts.className} fz="sm" fw={400} c="#333333" mt={10}>
              code quality very high and they
              have very detailed
              documentaion also they have
              very corporate for customer
              ticket
            </Text>
          </Card>
        </div>
        <div>
          <Card withBorder padding="xl" radius="xl" >
            <Text className={font.className} fz="lg" fw={400} mt="md">
              sinilian
            </Text>
            <Rating value={5} fractions={2} readOnly size="xs" />

            <Text className={fonts.className} fz="sm" fw={400} c="#333333" mt={10}>
              Wonderful and clean design will create an excellent base for starting the new agency. Especially when you don’t want to do design turnkey and are looking for something to help you make a fast and easy launch.
            </Text>
          </Card>
          <Card withBorder mt={16} padding="xl" radius="xl" >
            <Text className={font.className} fz="lg" fw={400} mt="md">
              kerim80
            </Text>
            <Rating value={5} fractions={2} readOnly size="xs" />

            <Text className={fonts.className} fz="sm" fw={400} c="#333333" mt={10}>
              Fast and good support. Theme
              easy to customize and many
              usable custom Elementor theme
              widgets.Nice work.
            </Text>
          </Card>
          <Card withBorder mt={16} padding="xl" radius="xl" >
            <Text className={font.className} fz="lg" fw={400} mt="md">
              powert
            </Text>
            <Rating value={5} fractions={2} readOnly size="xs" />

            <Text className={fonts.className} fz="sm" fw={400} c="#333333" mt={10}>
              Great renewable energy therne
              for business.l recommend this
              Energium theme because it is
              ver V g n e d a nd
            </Text>
          </Card>
        </div>
        <div>
          <Card withBorder padding="xl" radius="xl" >
            <Text className={font.className} fz="lg" fw={400} mt="md">
              hikevin2000
            </Text>
            <Rating value={5} fractions={2} readOnly size="xs" />

            <Text className={fonts.className} fz="sm" fw={400} c="#333333" mt={10}>
              the customer suport is excellent！Thank you Sergey for your quick response and everything you did for me!
            </Text>
          </Card>
          <Card withBorder mt={16} padding="xl" radius="xl" >
            <Text className={font.className} fz="lg" fw={400} mt="md">
              metintahayilma
            </Text>
            <Rating value={5} fractions={2} readOnly size="xs" />

            <Text className={fonts.className} fz="sm" fw={400} c="#333333" mt={10}>
              A perfect theme in every
              respect. They are very good
              especially in terms of support. I
              definitely recommend it. I
              bought dozens of themes. If I put
              them all on top of each other, it
              can&apos;t catch the success of this
              theme.
            </Text>
          </Card>
          <Card withBorder mt={16} padding="xl" radius="xl" >
            <Text className={font.className} fz="lg" fw={400} mt="md">
              khoavo
            </Text>
            <Rating value={5} fractions={2} readOnly size="xs" />

            <Text className={fonts.className} fz="sm" fw={400} c="#333333" mt={10}>
              This is one of the best Theme
              I&apos;ve purchased thus far. And the
              customer support by the Author
              IS first-class. Verv professiona&apos;
            </Text>
          </Card>
        </div>
        <div>
          <Card withBorder padding="xl" radius="xl"  >
            <Text className={font.className} fz="lg" fw={400} mt="md">
              manojchouh
            </Text>
            <Rating value={5} fractions={2} readOnly size="xs" />

            <Text className={fonts.className} fz="sm" fw={400} c="#333333" mt={10}>
              Nice theme with excellent support from the developers. All of my doubts and requests were fixed within a day.
            </Text>
          </Card>
          <Card withBorder mt={16} padding="xl" radius="xl" >
            <Text className={font.className} fz="lg" fw={400} mt="md">
              emil_b
            </Text>
            <Rating value={5} fractions={2} readOnly size="xs" />

            <Text className={fonts.className} fz="sm" fw={400} c="#333333" mt={10}>
              Great theme, and great
              customer support! The author
              always provided a solution even
              though it was not theme related.
              I&apos;ll surely buy new WordPress
              themes from Artureanec.
            </Text>
          </Card>
          <Card withBorder mt={16} padding="xl" radius="xl"  >
            <Text className={font.className} fz="lg" fw={400} mt="md">
              startelectric2022
            </Text>
            <Rating value={5} fractions={2} readOnly size="xs" />

            <Text className={fonts.className} fz="sm" fw={400} c="#333333" mt={10}>
              I purchased the theme because I
              really liked the design. After I
              started working with it I realized
              that I needed to translate some
              elements into Romanian.
            </Text>
          </Card>
        </div>
      </SimpleGrid>
      <span className={classes.Inner}></span>
    </Container>
  )
}

export default Testimonials