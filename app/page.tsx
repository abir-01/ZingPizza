import Banner from '@/components/Banner'
import Coupons from '@/components/Coupons'
import ExclusiveOffers from '@/components/ExclusiveOffers'
import Explore from '@/components/Explore'
import Footer from '@/components/Footer'
import MainText from '@/components/MainText'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Banner/>
    <Coupons/>
    <Explore/>
    <ExclusiveOffers/>
    <MainText/>
    </>
  )
}

export default page