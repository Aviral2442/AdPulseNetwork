'use client'
import { Container } from '@mantine/core'
import classes from './navbar.module.css'
import React from 'react'

const TopHeader = () => {
    return (
        <Container size="xl" bg={'#F0F2F4'} mt={8} className={classes.TopHeader} >
            Container with custom size
        </Container>
    )
}

export default TopHeader