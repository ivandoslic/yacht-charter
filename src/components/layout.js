import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, alwaysDark }) {
  return (
    <div style={{ margin: `0 auto`, width: `100%`, padding: `0`}}>
        <Header alwaysDark={alwaysDark}/>
        <main>{children}</main>
        <Footer />
    </div>
  )
}
