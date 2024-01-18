"use client"

import React from 'react'

const Menubar = ({scrolltoHash}:any) => {
    return (
        <div className='bg-[#0067a7] text-sm text-white flex justify-between overflow-scroll'  >
            <div className='mx-4 py-4 cursor-pointer' onClick={() => scrolltoHash('recommended')}>Recommended</div>
            <div className='mx-4 py-4 cursor-pointer'onClick={() => scrolltoHash('new_launches')}>New Launches</div>
            <div className='mx-4 py-4 cursor-pointer'onClick={() => scrolltoHash('veg_pizza')}>Veg Pizza</div>
            <div className='mx-4 py-4 cursor-pointer'onClick={() => scrolltoHash('non_veg_pizza')}>Non-Veg Pizza</div>
            <div className='mx-4 py-4 cursor-pointer'onClick={() => scrolltoHash('beverages')}>Beverages</div>
            <div className='mx-4 py-4 cursor-pointer'onClick={() => scrolltoHash('garlicbreads_more')}>Garlic Breads & More</div>
            <div className='mx-4 py-4 cursor-pointer'onClick={() => scrolltoHash('pizza_mania')}>Pizza Mania</div>
            <div className='mx-4 py-4 cursor-pointer'onClick={() => scrolltoHash('value_combos')}>Value Combos</div>
            <div className='mx-4 py-4 cursor-pointer'onClick={() => scrolltoHash('desserts')}>Desserts</div>
            <div className='mx-4 py-4 cursor-pointer'onClick={() => scrolltoHash('mealforone')}>Meal for 1</div>
            <div className='mx-4 py-4 cursor-pointer'onClick={() => scrolltoHash('party_combos')}>Party Combos</div>
            <div className='mx-4 py-4 cursor-pointer'onClick={() => scrolltoHash('noonion_nogarlic')}>No Onion No Garlic</div>
        </div>
    )
}

export default Menubar