'use client'
import React from 'react'
import HeroSection from './heroSection/page'
import IconSection from './iconSection/page'
import MonetiseOnline from './monetiseOnline/page'
import TopChoice from './topChoice/page'
import BecomePublisher from './becomePublisher/page'
import WhyChooseUs from './whyChooseUs/page'

const Publisher = () => {
  return (
    <div>
      <HeroSection  />
      <IconSection  />
      <MonetiseOnline  />
      <TopChoice  />
      <BecomePublisher  />
      <WhyChooseUs  />
    </div>
  )
}

export default Publisher