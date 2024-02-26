import React from 'react'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, width: `100%`, padding: `0`}}>
        <Header />
        { children }
    </div>
  )
}
