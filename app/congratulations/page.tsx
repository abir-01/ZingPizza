import React from 'react'
import checkgreen from '@/public/check-green.gif'
import Image from 'next/image'

const page = () => {
    return (
        <div className='flex h-[70vh]  justify-center items-center flex-col' >
            <div className='w-[100px] h-[100px] md:w-[200px] md:h-[200px]'>
                <Image src={checkgreen} alt="" />
            </div>
            <div className='text-lg text-center md:text-3xl font-semibold'>Congratulations ! Your Order has been successfully Placed and Delivered</div>
        </div>
    )
}

export default page