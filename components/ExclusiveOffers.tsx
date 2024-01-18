import React from 'react'
import Image from 'next/image'
import exclusiveoffers from "../public/exclusiveoffers.png"
import applestore from "../public/applestore.webp"
import playstore from "../public/playstore.webp"

const ExclusiveOffers = () => {
  return (
    <div className="container flex flex-col md:flex-row mx-auto bg-slate-100 mb-10 md:mb-20">
      <div className="md:w-1/2">
        <Image src={exclusiveoffers} alt='exclusiveoffers'/>
      </div>
      <div className="md:w-2/5 flex flex-col justify-center ms-auto">
        <div className='font-extrabold text-xl md:text-3xl mt-6 mb-3 md:my-0 text-gray-600'>Unlock Exclusive Offers</div>
        <div className='font-normal md:my-3 text-sm md:text-2xl text-gray-400 '>For lightning fast ordering experience download the Domino's app</div>
        <div className='flex my-3 justify-center'>
          <Image src={playstore} alt='playstore' width={100} className='mr-4 '/>
          <Image src={applestore} alt='applestore' width={100} className='mr-4'/>
        </div>
      </div>
    </div>
  )
}

export default ExclusiveOffers