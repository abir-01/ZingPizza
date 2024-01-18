import React from 'react'
import CartItem from './CartItem'

const MyOrders = ({ order }: any) => {
  console.log(order.order_total)
  return (
    <div className='my-6'>
      <div>
        {order?.item_names.map((item: any, i: any) => (
          <div className='flex justify-between my-4'>
            <div className='flex'>
            <p className='text-base mx-2'>{i+1}.</p>
            <p className='font-semibold text-base'>{item}</p>
            </div>
            <p className='text-sm'>Medium | Hand Tossed</p>
          </div>
        ))}
      </div>
      <div className='flex w-full px-8 justify-between py-6'>
        <div className='text-lg font-bold'>Subtotal</div>
        <div className='text-xl font-bold'> &#8377; {order.order_total}</div>
      </div>
    </div>
  )
}

export default MyOrders