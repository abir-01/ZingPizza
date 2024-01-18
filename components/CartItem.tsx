import React from 'react'
import samplepizza from '@/public/samplepizza.webp'
import Image from 'next/image'
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import type { RootState } from '../app/GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../app/GlobalRedux/Features/CartMenu/cartmenu';



const CartItem = ({item}:any) => {

    const cartmenu = useSelector((state: RootState) => state.value);
    const dispatch = useDispatch();

    const handleAdd = (e:any) => {
        e.preventDefault();
        
        dispatch(add(item));
    }
    
    const handleDelete = (e:any) => {
        e.preventDefault();
        
    dispatch(remove(item));
    
    
    }

    return (
        <div className='p-4 w-full'>

            <div className='flex justify-between  '>
                <Image src={item.image} alt="sample" width={100} height={100} />
                <div className='flex flex-col'>
                    <p className='font-semibold text-sm md:text-base'>{item.item_name}</p>
                    <p className='text-xs md:text-sm'>Medium | Hand Tossed</p>
                </div>
            </div>
            <div className="flex justify-between items-center my-4 border-b-2 pb-6">
                <div className='border-2 flex'>
                    <button className='border-e-2 p-2 my-auto text-lg' onClick={(e) => handleDelete(e)}><RiDeleteBinLine /></button>
                    <div className='border-e-2 p-2 text-xl'>{item.count}</div>
                    <button className=' p-2 my-auto' onClick={(e) => handleAdd(e)}><FaPlus /></button>
                </div>
                <div>
                    &#8377; {item.price}
                </div>
            </div>
        </div>
    )
}

export default CartItem