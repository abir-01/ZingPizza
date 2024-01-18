'use client'

import Menubar from '@/components/Menubar'
import React, { useEffect, useState } from 'react'
import type { RootState } from '../GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove,empty } from '../GlobalRedux/Features/CartMenu/cartmenu';
import Image from 'next/image';
import CheckoutItem from '@/components/CheckoutItem';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { ADD_ORDER, ADD_ADDRESS} from "@/graphql/mutations";
import { GET_ORDER,GET_USER} from "@/graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from 'next/navigation';

const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}



const page = () => {

    const { push } = useRouter();

    const [addOrder] = useMutation(ADD_ORDER);
    const [addAddress] = useMutation(ADD_ADDRESS);

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    const user = session ? session.user : undefined;
    const { data, loading, error } = useQuery(GET_USER,{
        variables:{email:user?.email}
    });
    

    const [State1, setState1] = useState<any>();
    const [city, setcity] = useState<any>();
    const [locality, setlocality] = useState<any>();
    const [pincode, setpincode] = useState<any>();
    const [item_names, setitem_names] = useState<any>([]);
    const [quantity, setquantity] = useState<any>([]);
    const [address_id, setaddress_id] = useState<any>();
    const [ordermessage,setordermessage] = useState<String>("Place Order")
    

    const [flag, setflag] = useState<Number>(0);
    const [total, settotal] = useState<any>(0);
    const cartmenu = useSelector((state: RootState) => state.value);
    const dispatch = useDispatch();



    useEffect(() => {
        Object.keys(cartmenu).length === 0 ? setflag(0) : setflag(1);

        let total2 = 0;

        let item_names1:any = [];
        let quantity1:any = [];

        cartmenu.forEach((menu) => {

            const menu1 = JSON.stringify(menu);
            console.log(menu1, typeof (JSON.parse(menu1).price))

            console.log(JSON.parse(menu1).item_name)
            console.log(JSON.parse(menu1).count)
            item_names1 = [...item_names1,(JSON.parse(menu1).item_name)]
            quantity1 = [...quantity1,(JSON.parse(menu1).count)]

            if (Number.isNaN(total))
                total2 = JSON.parse(menu1).price * JSON.parse(menu1).count
            else
                total2 = total2 + JSON.parse(menu1).price * JSON.parse(menu1).count;
        })
        settotal(total2);
        setquantity(quantity1)
        setitem_names(item_names1)

    }, [cartmenu])

    useEffect(()=>{
        console.log(data?.user.address?.pincode);
        setpincode(data?.user.address?.pincode.toString())
        setcity(data?.user.address?.city)
        setlocality(data?.user.address?.locality)
        setState1(data?.user.address?.state)
    },[data])


    const handleClick = (e:any) => {
        e.preventDefault();
       addAddress({variables:{user_id:data.user.id, city,locality,state:State1,pincode:pincode}})
       .then((res)=>{

        addOrder({variables:{item_names,quantity,user_id:data.user.id,order_total:total, addr_id:res.data.addAddress.address_id}})
        .then(()=>{
            setordermessage("Order Successfully Placed !!")
            
            // setTimeout(() => {
                push('/congratulations')
                dispatch(empty())
                settotal(0);
            // }, 1500);
        })
        
     } )

    }

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
            <div className="flex flex-col md:flex-row mt-20 justify-between container mx-auto">
                <div className='md:w-1/2'>
                    <div className='text-base md:text-2xl font-bold '>Items</div>
                    {
                        cartmenu?.map((menu, i) => (
                            <CheckoutItem item={menu} key={i} />
                        ))
                    }
                </div>
                {/* <div className='w-1/3'></div> */}
                <div className='flex md:w-1/3 px-8 justify-evenly sticky right-0 py-6'>
                    <div className='text-lg font-bold'>Subtotal</div>
                    <div className='text-xl font-bold'> &#8377; {total}</div>
                </div>
            </div>
            <div className='text-2xl font-bold container mx-auto my-10'>Fill Details Below</div>

            {/* form */}

            <div className='container mx-auto mb-20'>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full  px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={user ? user.name ? user.name : undefined : undefined} />
                            {user===(undefined||null) && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                        </div>

                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                locality
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="locality" value={locality} onChange={(e)=>setlocality(e.target.value)}/>
                            {locality===(undefined||null) && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                        </div>

                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                City
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" value={city} onChange={(e)=>setcity(e.target.value)}/>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                State
                            </label>
                            <div className="relative">
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="state" value={State1} onChange={(e)=>setState1(e.target.value)}/>

                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Pincode
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" value={pincode} onChange={(e)=>setpincode(e.target.value)}/>
                        </div>
                    </div>
                </form>

            </div>

            <div className="container mx-auto">
                <button className='text-white text-xl font-bold py-3 px-6 bg-green-500 w-full mb-20' onClick={(e) => { handleClick(e) }}>{ordermessage}</button>
            </div>
        </>
    )
}

export default page