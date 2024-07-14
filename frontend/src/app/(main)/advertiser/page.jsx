'use client'
import React from 'react'
import HeroSection from './heroSection/page'
import IconsSection1 from './iconSection1/page'
import RegisterCampion from './registerCampion/page'
import IconsSection2 from './iconsSection2/page'
import WhyChooseUs from './whyChooseUs/page'
import BecomeAdvertiser from './becomeAdvertiser/page'

const Advertiser = () => {
  return (
    <div>
      <HeroSection />
      <IconsSection1 />
      <RegisterCampion />
      <IconsSection2 />
      <BecomeAdvertiser />
      <WhyChooseUs />
    </div>
  )
}

export default Advertiser