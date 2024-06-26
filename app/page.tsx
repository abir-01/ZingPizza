"use client"

import Banner from '@/components/Banner'
// import Coupons from '@/components/Coupons'
// import ExclusiveOffers from '@/components/ExclusiveOffers'
// import Explore from '@/components/Explore'
// import Footer from '@/components/Footer'
// import MainText from '@/components/MainText'
// import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
// import { options } from "./api/auth/[...nextauth]/options"
// import { getServerSession } from "next-auth/next"
import { useMutation } from "@apollo/client";
import { ADD_USER } from "@/graphql/mutations";
import { useSession } from 'next-auth/react'
// import { RedirectType, redirect } from 'next/navigation'
import dynamic from 'next/dynamic';
const LazyCoupons = dynamic(() => import('../components/Coupons'));
const LazyExplore = dynamic(() => import('../components/Explore'));
const LazyExclusive = dynamic(() => import('../components/ExclusiveOffers'));
const LazyMainText = dynamic(() => import('../components/MainText'));

const page =  () => {

  const { data: session } = useSession()

  const user = session?.user;

  const [addUser] = useMutation(ADD_USER);

  useEffect(() => {
    if (user) {
      addUser({ variables: { email: user.email, name: user.name } });
    }
  }, [user])

  return (
    <>
      <Banner />
      {/* <Coupons /> */}
      <LazyCoupons/>
      <LazyExplore />
      <LazyExclusive />
      <LazyMainText />
    </>
  )
}

export default page;