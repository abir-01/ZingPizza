"use client"

import Image from 'next/image'
import React from 'react'
import logo from "../public/logo.png"
import Link from 'next/link'
import { signOut } from "next-auth/react"


const Navbar = ({ session }: any) => {

    // console.log(session)
    const user = session?.user;
    // console.log(user);

    return (
        <header className="text-gray-600 body-font shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src={logo} alt="logo" height={60} width={200}></Image>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-bold justify-center">
                    <Link prefetch href="/menu" className="mr-5 hover:text-gray-900">Our Menu</Link>
                    <Link href="/corporate_enquiry" className="mr-5 hover:text-gray-900">Corporate Enquiry</Link>
                    <Link href="/" className="mr-5 hover:text-gray-900">Blogs</Link>
                    <Link href="/contact" className="mr-5 hover:text-gray-900">Contact Us</Link>
                </nav>
                {
                    !user ?
                        <Link href="/api/auth/signin" className="inline-flex items-center bg-red-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0">
                            Log In
                        </Link> :
                        <div className='flex  justify-center items-center text-center'>
                                 {/* After User logs in  */}
                                <div>
                                    <div className=''>
                                        <Image src={user?.image} alt="" width={40} height={40} className='rounded-full mx-auto' />
                                    </div>
                                    <div className='mx-4 text-sm font-semibold'>{user?.name}</div>
                                </div>
                                <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })} className='text-red-500 font-semibold'>Log Out</button>
                        </div>
                }
            </div>
        </header >
    )
}

export default Navbar