import Image from 'next/image'
import React from 'react'
import logo from "../public/logo.png"
import Link from 'next/link'



const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src={logo} alt="logo" height={60} width={200}></Image>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-bold justify-center">
                    <Link href="/menu" className="mr-5 hover:text-gray-900">Our Menu</Link>
                    <Link href="/" className="mr-5 hover:text-gray-900">Corporate Orders</Link>
                    <Link href="/" className="mr-5 hover:text-gray-900">Blogs</Link>
                    <Link href="/" className="mr-5 hover:text-gray-900">Contact Us</Link>
                </nav>
                <button className="inline-flex items-center bg-red-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0">
                    Download App                    
                </button>
            </div>
        </header>
    )
}

export default Navbar