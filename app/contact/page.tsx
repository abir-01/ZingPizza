import React from 'react'
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

const page = async() => {

    const session = await getServerSession(options)

    return (
        <div className=' my-20 container mx-auto text-center'>
            
            <div className='my-8'>
                <div>
                    <p className='text-2xl'>Domino's Customer Care Number</p>
                    <p>1800-208-1234</p>
                </div>
                <div className='my-4'>
                    <p className='text-2xl'>Domino's Contact Address</p>
                    <p> Domino''s Pizza India,</p>
                    <p>Tower-D, Plot No. 5,</p>
                    <p>5th Floor, Logix Techno Park,</p>
                    <p>Sector 127, Noida - 201304, U.P.</p>
                </div>
            </div>
            <div>
                <p>Have any feedback or queries? </p>
                <p>We''d love to hear from you. Write to us at </p>
                <p className='font-bold'>guestcaredominos@jublfood.com</p>
            </div>
        </div>
    )
}

export default page