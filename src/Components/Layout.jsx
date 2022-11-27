import React from 'react'
import Footer from './Footer'
import Navigaton from './Navigaton'

const Layout = ({children}) => {
    return(
        <>
            <Navigaton/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout
