import React from 'react';
import Navbar from './navbar/page';
import Footer from './footer/page';

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
export default MainLayout;