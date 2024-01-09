'use client'

import Menubar from '@/components/Menubar'
import React, { useEffect, useState } from 'react'
import type { RootState } from '../GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../GlobalRedux/Features/CartMenu/cartmenu';
import Image from 'next/image';
import cartimage from '@/public/CartImage.png'
import CheckoutItem from '@/components/CheckoutItem';

const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

const page = () => {

    const [flag, setflag] = useState<Number>(0);
    const [total, settotal] = useState<any>(0);
    const cartmenu = useSelector((state: RootState) => state.value);
    const dispatch = useDispatch();



    useEffect(() => {
        Object.keys(cartmenu).length === 0 ? setflag(0) : setflag(1);

        let total2 = 0;

        cartmenu.forEach((menu) => {

            const menu1 = JSON.stringify(menu);
            console.log(menu1, typeof (JSON.parse(menu1).price))

            if (Number.isNaN(total))
                total2 = JSON.parse(menu1).price * JSON.parse(menu1).count
            else
                total2 = total2 + JSON.parse(menu1).price * JSON.parse(menu1).count;
        })
        settotal(total2);

    }, [cartmenu])

    if (flag === 0) {
        return (
            <>
                <Menubar scrolltoHash={scrolltoHash} />
                <div className=' h-[70vh] flex flex-col justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                    < span className='text-gray-500 font-bold text-2xl' > Your Cart is Empty</span >
                    <p className='text-gray-500 text-lg'>Please add some items from the menu.</p>
                    {/* <Image src={cartimage} alt='cartimage' className='max-w-[40%] absolute right-0 top-0' /> */}
                </div >

            </>
        )
    }


    return (
        <>
            <Menubar scrolltoHash={scrolltoHash} />
            <div className="flex mt-20 justify-between container mx-auto">
                <div className='w-1/2'>
                    <div className='text-2xl font-bold '>Items</div>
                    {
                        cartmenu?.map((menu, i) => (
                            <CheckoutItem item={menu} key={i} />
                        ))
                    }
                </div>
                {/* <div className='w-1/3'></div> */}
                <div className='flex w-1/3 px-8 justify-evenly sticky right-0 py-6'>
                    <div className='text-lg font-bold'>Subtotal</div>
                    <div className='text-xl font-bold'> &#8377; {total}</div>
                </div>
            </div>
            <div className='text-2xl font-bold container mx-auto my-10'>Fill Details Below</div>

            {/* form */}

            <div className='container mx-auto mb-20'>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Password
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                City
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                State
                            </label>
                            <div className="relative">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="state" />
                                
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Zip
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                        </div>
                    </div>
                </form>

            </div>

            <div className="container mx-auto">
                <button className='text-white text-xl font-bold py-3 px-6 bg-green-500 w-full mb-20'>Place Order</button>
            </div>
        </>
    )
}

export default page