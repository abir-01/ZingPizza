import React from 'react'
import Image from 'next/image'
import exclusiveoffers from "../public/exclusiveoffers.png"
import applestore from "../public/applestore.webp"
import playstore from "../public/playstore.webp"

const ExclusiveOffers = () => {
  return (
    <div className="container flex mx-auto bg-slate-100 mb-20">
      <div className="w-1/2">
        <Image src={exclusiveoffers} alt='exclusiveoffers'/>
      </div>
      <div className="w-2/5 flex flex-col justify-center ms-auto">
        <div className='font-extrabold text-4xl text-gray-600'>Unlock Exclusive Offers</div>
        <div className='font-normal my-3 text-2xl text-gray-400 '>For lightning fast ordering experience download the Domino's app</div>
        <div className='flex my-3'>
          <Image src={playstore} alt='playstore' width={200} className='mr-4'/>
          <Image src={applestore} alt='applestore' width={200} className='mr-4'/>
        </div>
      </div>
    </div>
  )
}

export default ExclusiveOffers