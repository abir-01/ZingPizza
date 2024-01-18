import React from 'react'
import Image from 'next/image'
import offer1 from "../public/Offer1.webp"
import offer2 from "../public/Offer2.webp"
import offer3 from "../public/Offer3.webp"
import offer4 from "../public/Offer4.webp"
import offer5 from "../public/Offer5.webp"
import offer6 from "../public/Offer6.webp"

const Coupons = () => {
  return (
    <div className="container mx-auto">
        <div className='text-xl md:text-3xl font-extrabold text-gray-500 my-6'>Coupons & Offers</div>
        <div className="flex overflow-scroll no-scrollbar my-6 md:my-12">
            <Image src={offer1} alt="offer1"  className='mr-6 md:mr-12 max-w-[300px] md:max-w-[600px]'/>
            <Image src={offer2} alt="offer2"  className='mr-6 md:mr-12 max-w-[300px] md:max-w-[600px]'/>
            <Image src={offer3} alt="offer3"  className='mr-6 md:mr-12 max-w-[300px] md:max-w-[600px]'/>
            <Image src={offer4} alt="offer4"  className='mr-6 md:mr-12 max-w-[300px] md:max-w-[600px]'/>
            <Image src={offer5} alt="offer5"  className='mr-6 md:mr-12 max-w-[300px] md:max-w-[600px]'/>
            <Image src={offer6} alt="offer6"  className='mr-6 md:mr-12 max-w-[300px] md:max-w-[600px]'/>
        </div>
    </div>
  )
}

export default Coupons