import Image from 'next/image'
import React from 'react'
import bannerimage from "../public/banner.webp"
import Link from 'next/link'

const Banner = () => {
    return (
        <Link href="/menu" className="flex flex-col md:flex-row bg-[#1a5ca3]">
            <div className='w-full md:w-2/5 flex flex-col items-center justify-center align-center'>
                <div className="w-full md:w-3/4 mx-5 text-center my-6 md:my-0">

                    <p className='text-white text-xl md:text-4xl font-medium'>Domino's online ordering</p>
                    <p className='text-[#47a0ff] text-lg md:text-2xl my-2'>Yummy pizza delivered fast & fresh</p>

                    <div className=''>
                        <button className='text-white text-sm md:text-xl font-semibold md:font-extrabold my-4 md:my-6 px-8 md:px-16 py-3 bg-green-600'>ORDER ONLINE NOW</button>
                    </div>
                </div>
            </div>
            <Image src={bannerimage} alt="banner-image" className='w-full md:w-3/5' priority placeholder='blur'/>
        </Link>
    )
}

export default Banner