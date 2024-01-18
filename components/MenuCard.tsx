"use client"

import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { IMenu } from "@/typings.d";
import Image from 'next/image';
import type { persistor } from '../app/GlobalRedux/store';


import type { RootState } from '../app/GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../app/GlobalRedux/Features/CartMenu/cartmenu';
import Link from 'next/link'


type Props = {
    menu: IMenu;
};


const MenuCard = ({ menu }: Props) => {
    // console.log()

    const cart = useSelector((state: typeof persistor) => state);
    const dispatch = useDispatch();
    const [count, setcount] = useState(1);


    useEffect(() => {
        console.log("Cart = " + cart);

    }, [cart])

    const handleClick = (e: any) => {
        e.preventDefault();
        const obj = {
            "menu_id": menu.menu_id,
            "item_name": menu.item_name,
            "count": count,
            "price":menu.price,
            "image":menu.image,
            "description":menu.description
        }

        console.log(obj.menu_id);

        dispatch(add(obj));
    }

    return (
        // <section className="text-gray-600 body-font">
        //     <div className="container px-5 py-24 mx-auto">
        //         <div className="flex flex-wrap -m-4">
        <div className="lg:w-80 mr-auto my-4 md:w-1/2 p-4 w-full menucard shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <Link href="" className="block relative h-48 rounded overflow-hidden">
                <Image alt="menucardimage" className="object-cover object-center w-full h-full block" src={menu.image} layout='fill' />
            </Link>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-gray-900 text-base tracking-widest title-font font-semibold mb-1">{menu.item_name}</h3>
                    <h2 className="text-gray-500 title-font text-sm font-medium ">{menu.description.length > 50 ? `${menu.description.substring(0, 100)}...` : menu.description}</h2>
                </div>
                <div>
                    <p className="mt-1 text-green-600 font-semi-bold">&#8377;{menu.price}</p>

                </div>
            </div>
            <div className="flex justify-between mt-4 border-t-2 pt-2">
                <div className="flex flex-col">

                    <label htmlFor="size" className='text-xs'>Size</label>
                    <select name="size" id="size" className='text-xs p-1'>
                        <option value="regular">regular</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                    </select>
                </div>

                <div className="flex flex-col">

                    <label htmlFor="crust" className='text-xs'>Crust</label>
                    <select name="crust" id="crust" className='text-xs p-1'>
                        <option value="regular">New Hand Tossed</option>
                        <option value="medium">100% Wheat Thin Crust</option>
                        <option value="large">Cheese Burst</option>
                        <option value="large">Fresh Pan Pizza</option>
                    </select>
                </div>

            </div>

            <button onClick={(e) => { handleClick(e) }} className='p-2 w-full text-center font-semibold text-green-600 my-4 border border-green-500'>
                Add to Cart
            </button>
        </div>

        //         </div>
        //     </div>
        // </section>
    )
}

export default MenuCard