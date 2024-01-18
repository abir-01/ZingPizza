"use client"

import React, { useEffect, useState } from 'react'
import cartimage from '@/public/CartImage.png'
import Image from 'next/image'
import type { RootState } from '../app/GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../app/GlobalRedux/Features/CartMenu/cartmenu';
import CartItem from './CartItem';
import Link from 'next/link';

const Cart = () => {

    const [flag, setflag] = useState<Number>(0);
    const [total, settotal] = useState<any>(0);

    const cartmenu = useSelector((state: RootState) => state.value);
    const dispatch = useDispatch();

    useEffect(() => {
        Object.keys(cartmenu).length === 0 ? setflag(0) : setflag(1);

        let total2 = 0;

        cartmenu.forEach((menu:any) => {

            const menu1 = JSON.stringify(menu);
            // console.log(menu1, typeof (JSON.parse(menu1).price))

            if (Number.isNaN(total))
                total2 = JSON.parse(menu1).price * JSON.parse(menu1).count
            else
                total2 = total2 + JSON.parse(menu1).price * JSON.parse(menu1).count;
        })
        settotal(total2);

    }, [cartmenu])

    // useEffect(() => {
    //     console.log(total);
    // }, [total])


    if (flag === 0) {
        return <div className='w-1/4 bg-white h-[70vh] flex flex-col justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] fixed right-5'>
            < span className='text-gray-500 font-bold text-2xl' > Your Cart is Empty</span >
            <p className='text-gray-500 text-lg'>Please add some items from the menu.</p>
            <Image src={cartimage} alt='cartimage' className='max-w-[40%] absolute right-0 top-0' />
        </div >
    }

    return (

        <div className='w-1/4 h-[70vh] bg-white flex flex-col overflow-scroll items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] fixed right-5 no-scrollbar'>
            <div className='bg-green-500 h-[10px] w-full'></div>
            <div className="text-2xl font-bold text-center my-4 underline">CART</div>
            <div className='w-full '>
                {
                    cartmenu?.map((menu:any, i:any) => (
                        <CartItem item={menu} key={i} />
                    ))
                }
            </div>
            <div className='flex w-full px-8 justify-between py-6'>
                <div className='text-lg font-bold'>Subtotal</div>
                <div className='text-xl font-bold'> &#8377; {total}</div>
            </div>
            <Link href="/checkout" className='w-full text-center py-3 bg-green-500 text-white sticky bottom-0'>Checkout</Link>

        </div >

    )
}

export default Cart