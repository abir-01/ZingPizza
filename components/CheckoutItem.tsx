import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../app/GlobalRedux/Features/CartMenu/cartmenu';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

const CheckoutItem = ({ item }: any) => {


    const dispatch = useDispatch();

    const handleAdd = (e: any) => {
        e.preventDefault();

        dispatch(add(item));
    }

    const handleDelete = (e: any) => {
        e.preventDefault();

        dispatch(remove(item));


    }

    // console.log(item)
    return (
        <div className="flex shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 my-4">
            <div className='flex'>
                <img src={item.image} alt="" width={200} />
                <div className="flex flex-col mx-10">
                    <div className='font-semibold text-base'>{item.item_name}</div>
                    <div className='text-xs text-gray-500'>{item.description}</div>
                    <div className='text-sm mt-2'>Medium | New Hand Tossed </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center text-lg font-semibold'>&#8377; {item.price}</div>
                <div className='border-2 flex my-3'>
                    <button className='border-e-2 p-2 my-auto text-sm' onClick={(e) => handleDelete(e)}><RiDeleteBinLine /></button>
                    <div className='border-e-2 p-2 text-sm '>{item.count}</div>
                    <button className=' p-2 my-auto' onClick={(e) => handleAdd(e)}><FaPlus /></button>
                </div>
            </div>

        </div>
    )
}

export default CheckoutItem