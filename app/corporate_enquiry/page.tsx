import React from 'react'
import image1 from "../../public/virtual_party.webp"
import Image from 'next/image'
import image2 from "../../public/corporate_2.webp"
import image4 from "../../public/corporate_4.webp"
import image3 from "../../public/image3.webp"

const page = () => {
  return (
    <div className='container flex mx-auto my-20 justify-between'>
      <div className='w-3/5 border-b-2 pb-10'>
        <Image src={image1} alt="" />
        <div className='text-center my-10'>
          <p className='text-xl font-bold'>WORK TOGETHER, EAT TOGETHER</p>
          <p>As virtual parties have become the new way to bond and enjoy together, it’s time to up these unique celebrations with a unique feast. </p>
        </div>
        <Image src={image2} alt="" className='my-10' />
        <Image src={image3} alt="" className='my-10' />
        <div className='text-center my-10'>
          <p className='text-xl font-bold'>CELEBRATIONS MADE EASY</p>
          <p>Convert your work from home into party from home with Domino’s Virtual Feast. Order some good old favourites from Domino’s and celebrate with your colleagues in a new and safer way.  </p>
        </div>
        <Image src={image4} alt="" className='my-10' />
        <div className='text-xl text-center'>
          <p>Feel free to write to us at</p>
          <p className='font-bold'>corporate.sales@jublfood.com </p>
        </div>
      </div>
      <div className='w-1/3 mx-6 py-8 px-8 bg-[#dff0ff]  min-h-[70vh] shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-auto'>
        <div className='font-bold text-xl'>Contact Us</div>
        <div className='my-2'>Please let us know your query</div>

        <div className='my-10'>
          <input className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name*" required />
          <input className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Organization" />
          <input className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Conatct Number*" />
          <input className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Email ID*" />
          <input className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Location" />
          <input className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" placeholder="Tentaive Date" />
          <textarea name="query" id="" className='w-full p-3' placeholder='Query'></textarea>
        </div>
        <button className='text-white bg-red-500 py-3 w-full text-lg'>Submit</button>


      </div>

    </div>
  )
}

export default page