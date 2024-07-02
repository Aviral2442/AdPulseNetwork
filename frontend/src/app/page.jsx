'use client'
import React from 'react'
import Navbar from './(main)/navbar/page'
import Footer from './(main)/footer/page'
import Home from './(main)/home/page'
import classes from './page.module.css'
import Brands from './(main)/brands/page'
import Testimonials from './(main)/testimonial/page'

const Homepage = () => {
  return (
    <div className={classes.body} >
      <Navbar />
      <Home />
      <Testimonials />
      <Brands />
      <Footer />
    </div>
  )
}

export default Homepage