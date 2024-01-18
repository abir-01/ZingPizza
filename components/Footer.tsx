import React from 'react'
import Image from 'next/image'
import logo from "../public/logo.png"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="text-gray-600 bg-[#222e3a] body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
           
                <div className="flex-grow flex flex-wrap  -mb-10 md:text-left text-center order-first mx-auto">
                    <div className="lg:w-1/5 md:w-1/2 w-full ">
                        <h2 className="title-font  text-gray-600 font-semibold tracking-widest text-xl mb-3  text-center">MENU</h2>
                        <nav className="list-none mb-10 text-center">
                            <li className='my-4'>
                                <Link href="" className="text-white ">Veg Pizza</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white ">Chicken Pizza</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white ">Pasta</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white ">Pizza Crust</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white ">Beverages</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white ">Pizza Mania</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white ">Burger Pizza</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/5 md:w-1/2 w-full ">
                        <h2 className="title-font  text-gray-600 font-semibold tracking-widest text-xl mb-3 text-center">COMPANY</h2>
                        <nav className="list-none mb-10 text-center">
                            <li className='my-4'>
                                <Link href="" className="text-white">First Link</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white">Second Link</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white">Third Link</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/5 md:w-1/2 w-full ">
                        <h2 className="title-font  text-gray-600 font-semibold tracking-widest text-xl mb-3 text-center">PIZZA RESTAURANTS</h2>
                        <nav className="list-none mb-10 text-center">
                            <li className='my-4'>
                                <Link href="" className="text-white">First Link</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white">Second Link</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white">Third Link</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/5 md:w-1/2 w-full ">
                        <h2 className="title-font  text-gray-600 font-semibold tracking-widest text-xl mb-3 text-center">ABOUT</h2>
                        <nav className="list-none mb-10 text-center">
                            <li className='my-4'>
                                <Link href="" className="text-white">First Link</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white">Second Link</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white">Third Link</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/5 md:w-1/2 w-full ">
                        <h2 className="title-font  text-gray-600 font-semibold tracking-widest text-xl mb-3 text-center">LEGAL</h2>
                        <nav className="list-none mb-10 text-center">
                            <li className='my-4'>
                                <Link href="" className="text-white">First Link</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white">Second Link</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white">Third Link</Link>
                            </li>
                            <li className='my-4'>
                                <Link href="" className="text-white">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-[#1a2735]">
                <div className="container mx-auto py-4  flex flex-wrap flex-col sm:flex-row">
                    <div className="text-[#5c6f83] text-center w-full ">
                        <p>All Rights Reserved. Copyright © Jubilant FoodWorks Ltd. </p>
                    </div>
                   
                </div>
            </div>
        </footer>
    )
}

export default Footer