'use client'
import React from 'react'
import Brands from './brands/page'
import Testimonials from './testimonial/page'
import HeroSection from './heroSection/page'
import KnowMore from './knowmore/page'
import Features from './features/features'
import MakesDifferent from './makesdifferent/MakesDifferent'
import Benifits from './benifits/Benifits'
import Blogs from './blogs/Blogs'

const Home = () => {
  return (
    <div>
      
      
      <HeroSection />
      <KnowMore />
      <Features />
      <MakesDifferent />
      <Benifits />
      <Testimonials />
      <Blogs />
      <Brands />

    </div>
  )
}

export default Home