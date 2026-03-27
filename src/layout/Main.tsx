import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Main = ({children}:any) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Main