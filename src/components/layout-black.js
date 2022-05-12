import React from 'react'

import Header from "./header-black"
import Footer from "./footer"
import "./layout.css"

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout