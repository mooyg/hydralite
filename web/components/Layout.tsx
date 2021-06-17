import React from 'react'
import Navbar from '~/components/Landing/Navbar'
import Footer from './Footer'

const Layout = ({
    children,
    navType,
}: {
    children: any
    navType: 'home' | 'dash'
}) => {
    return (
        <div>
            {navType === 'home' && <Navbar />}
            {children}
            <Footer />
        </div>
    )
}

export default Layout
