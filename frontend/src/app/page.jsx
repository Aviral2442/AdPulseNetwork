'use client'
import React from 'react'
import Navbar from './(main)/navbar/page'
import Footer from './(main)/footer/page'
import Home from './(main)/home/page'
import classes from './page.module.css'

const Homepage = () => {
  return (
    <div  >
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default Homepage