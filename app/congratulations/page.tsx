import React from 'react'
import checkgreen from '@/public/check-green.gif'
import Image from 'next/image'

const page = () => {
    return (
        <div className='flex h-[70vh]  justify-center items-center flex-col' >
            <div className='w-[200px] h-[200px]'>
                {/* <div className="tenor-gif-embed" data-postid="16677782" data-share-method="host" data-aspect-ratio="1.02564" data-width="100%"><a href="https://tenor.com/view/check-green-white-background-gif-16677782">Check Green GIF</a>from <a href="https://tenor.com/search/check-gifs">Check GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
                <Image src={checkgreen} alt="" />
            </div>
            <div className='text-3xl font-semibold'>Congratulations ! Your Order has been successfully Placed and Delivered</div>
        </div>
    )
}

export default page