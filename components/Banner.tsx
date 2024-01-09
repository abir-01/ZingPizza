import Image from 'next/image'
import React from 'react'
import bannerimage from "../public/banner.png"

const Banner = () => {
    return (
        <div className="flex bg-[#1a5ca3]">
            <div className='w-2/5 flex flex-col items-center justify-center'>
                <div className="w-3/4 mx-5">

                    <p className='text-white text-4xl font-medium'>Domino's online ordering</p>
                    <p className='text-[#47a0ff] text-2xl my-2'>Yummy pizza delivered fast & fresh</p>

                    <div className=''>
                        <button className='text-white text-xl font-extrabold my-6 px-16 py-3 bg-green-600'>ORDER ONLINE NOW</button>
                    </div>
                </div>
            </div>
            <Image src={bannerimage} alt="banner-image" className='w-3/5'/>
        </div>
    )
}

export default Banner