"use client"

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { ADD_ADDRESS } from "@/graphql/mutations";
import { GET_USER } from "@/graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from 'next/navigation';

// import Address from "@/components/Address"
import MyOrders from '@/components/MyOrders'



const page = ({ }) => {

  const [State1, setState1] = useState<any>();
  const [city, setcity] = useState<any>();
  const [locality, setlocality] = useState<any>();
  const [pincode, setpincode] = useState<any>();
  const [orders, setorders] = useState<any>([]);

  const [addressmessage, setaddressmessage] = useState<String>("Change Address")

  const { push } = useRouter();
  const [addAddress] = useMutation(ADD_ADDRESS);

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/client')
    }
  })


  const user = session ? session.user : undefined;
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { email: user?.email }
  });

  useEffect(() => {
    console.log(data?.user.address?.pincode);
    setpincode(data?.user.address?.pincode.toString())
    setcity(data?.user.address?.city)
    setlocality(data?.user.address?.locality)
    setState1(data?.user.address?.state)
    setorders(data?.user.orders)
  }, [data])

  const handleClick = async (e: any) => {
    e.preventDefault();
    addAddress({ variables: { user_id: data.user.id, city, locality, state: State1, pincode: pincode } }).then(() => {
      setaddressmessage("Address Updated Successfully !!")
      setTimeout(() => {
        setaddressmessage("Update Address");
      }, 2000)
    })
  }

  return (
    <>
      <div className='container mx-auto my-20'>
        <div className='text-xl font-bold my-10'>Address</div>
        <div className='container mx-auto mb-20'>
          <form className="w-full max-w-lg">

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={user ? user.name ? user.name : undefined : undefined} />
                {user === (undefined || null) && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
              </div>

            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  locality
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="locality" value={locality} onChange={(e) => setlocality(e.target.value)} />
                {locality === (undefined || null) && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
              </div>

            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                  City
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" value={city} onChange={(e) => setcity(e.target.value)} />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                  State
                </label>
                <div className="relative">
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="state" value={State1} onChange={(e) => setState1(e.target.value)} />

                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                  Pincode
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" value={pincode} onChange={(e) => setpincode(e.target.value)} />
              </div>
            </div>
          </form>

        </div>

        <div className="container mx-auto">
          <button className='text-white text-xl font-bold py-3 px-6 bg-green-500 w-full mb-20' onClick={(e) => { handleClick(e) }}>{addressmessage}</button>
        </div>

        <div className='text-xl font-bold my-10'>My Orders</div>

        {
          orders?.map((order: any, i: any) => (
            <MyOrders order={order} key={i} />
          ))
        }
      </div>
    </>
  )
}

export default page