// import Layout from '../components/layout'
import React from 'react'
import Navbar from './navbar'
// import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
      <h1>footer</h1>
    </>
  )
}

export default Layout