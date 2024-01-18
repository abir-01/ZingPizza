import React from 'react'
import Image from 'next/image'
import party from "../public/party.webp"
import nearbystore from "../public/nearbystore.webp"
import menu from "../public/menu.webp"
import catering from "../public/catering.webp"

const Explore = () => {
    return (
        <div className="container mx-auto my-20">
            <div className='text-3xl font-extrabold text-gray-500 my-6'>Explore</div>
            <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-0 pt-6 rounded-lg flex flex-col items-center">
                        <Image src={menu} alt="menu" height={60}></Image>
                        <h2 className="title-font  text-xl my-3 font-extrabold text-gray-900">OUR MENU</h2>
                        <p className="font-sm text-grey-500 mb-3 px-3">Explore our range of delicious Pizzas, delivered in 30 minutes!</p>
                        {/* <hr className='border-' /> */}
                        <div className='text-red-600 font-bold border-t w-3/4 py-3'>DISCOVER PIZZA</div>
                    </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-0 pt-6 rounded-lg flex flex-col items-center">
                        <Image src={nearbystore} alt="nearbystore" height={60}></Image>
                        <h2 className="title-font  text-xl my-3 font-extrabold text-gray-900">NEARBY STORE</h2>
                        <p className="font-sm text-grey-500 mb-3 px-3">Find a Domino's Pizza restaurant near you</p>
                        {/* <hr className='border-' /> */}
                        <div className='text-red-600 font-bold border-t w-3/4 py-3'>FIND DOMINO'S STORE</div>
                    </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-0 pt-6 rounded-lg flex flex-col items-center">
                        <Image src={party} alt="party" height={60}></Image>
                        <h2 className="title-font  text-xl my-3  font-extrabold text-gray-900">BIRTHDAY PARTY</h2>
                        <p className="font-sm text-grey-500 mb-3 px-2">Celebarte the joy of birthday with Fresh & Hot pizzas</p>
                        {/* <hr className='border-' /> */}
                        <div className='text-red-600 font-bold border-t w-3/4 py-3'>BOOK NOW</div>
                    </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-0 pt-6 rounded-lg flex flex-col items-center">
                        <Image src={catering} alt="catering" height={60}/>
                        <h2 className="title-font  text-xl my-3 font-extrabold text-gray-900">CATERING</h2>
                        <p className="font-sm text-grey-500 mb-3 px-3">Live Domino's Kitchen for weddings/corporate events</p>
                        {/* <hr className='border-' /> */}
                        <div className='text-red-600 font-bold border-t w-3/4 py-3'>BOOK NOW</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Explore