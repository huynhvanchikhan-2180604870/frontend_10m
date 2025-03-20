import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Router } from 'react-router-dom'
import Routers from '../routes/Routers'

const MainLayout = () => {
  return (
    <>
        <Header />
        <Routers />
        <Footer />
    </>
  )
}

export default MainLayout
