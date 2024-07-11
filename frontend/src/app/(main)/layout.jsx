'use client';
import React from 'react';
import Navbar from './navbar/page';
import Footer from './footer/page';

const MainLayout = ({ children }) => {
    return (
        <>
            <div >
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}
export default MainLayout;