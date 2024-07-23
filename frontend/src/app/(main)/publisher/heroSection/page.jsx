import { Image } from '@mantine/core'
import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <Image
                radius="md"
                src="heroBanner.png"
                // h={"30%"}
                mt={5}
                alt='Hero Banner'
            />
        </div>
    )
}

export default HeroSection