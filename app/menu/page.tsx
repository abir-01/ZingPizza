"use client"

import Cart from '@/components/Cart'
import MenuCards from '@/components/MenuCards'
import Menubar from '@/components/Menubar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id)
  element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}



const page = () => {

  const { data: session } = useSession()

  return (
    <>
      <Menubar scrolltoHash={scrolltoHash} />
      <div className="flex my-10 md:my-20 container mx-auto">
        <MenuCards />
        <Cart/>
      </div>
    </>
  )
}

export default page