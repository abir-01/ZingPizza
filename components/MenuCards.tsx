"use client"

import React, { useEffect, useRef, useState } from 'react'
import MenuCard from './MenuCard'
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_MENU } from "@/graphql/queries";
import { IMenu } from '@/typings.d'

const MenuCards = () => {

  const { data, loading, error } = useQuery(GET_ALL_MENU);
  const menus: IMenu[] = data?.readAllMenu;
  // console.log(menus);

  const [recommended, setRecommended] = useState<IMenu[]>([]);
  const [new_launches, setnew_launches] = useState<IMenu[]>([]);
  const [veg_pizza, setveg_pizza] = useState<IMenu[]>([]);
  const [non_veg_pizza, setnon_veg_pizza] = useState<IMenu[]>([]);
  const [beverages, setbeverages] = useState<IMenu[]>([]);
  const [garlicbreads_more, setgarlicbreads_more] = useState<IMenu[]>([]);
  const [pizza_mania, setpizza_mania] = useState<IMenu[]>([]);
  const [value_combos, setvalue_combos] = useState<IMenu[]>([]);
  const [desserts, setdesserts] = useState<IMenu[]>([]);
  const [mealforone, setmealforone] = useState<IMenu[]>([]);
  const [party_combos, setparty_combos] = useState<IMenu[]>([]);
  const [noonion_nogarlic, setnoonion_nogarlic] = useState<IMenu[]>([]);

  useEffect(() => {
    setRecommended(menus?.filter((menu) => {
      return menu.category === 'Recommended';
    }));
    setnew_launches(menus?.filter((menu) => {
      return menu.category === 'New Launches';
    }));
    setveg_pizza(menus?.filter((menu) => {
      return menu.category === 'Veg Pizza';
    }));
    setnon_veg_pizza(menus?.filter((menu) => {
      return menu.category === 'Non-Veg Pizza';
    }));
    setbeverages(menus?.filter((menu) => {
      return menu.category === 'Beverages';
    }));
    setgarlicbreads_more(menus?.filter((menu) => {
      return menu.category === 'Garlic Breads & More';
    }));
    setpizza_mania(menus?.filter((menu) => {
      return menu.category === 'Pizza Mania';
    }));
    setvalue_combos(menus?.filter((menu) => {
      return menu.category === 'Value Combos';
    }));
    setdesserts(menus?.filter((menu) => {
      return menu.category === 'Desserts';
    }));
    setmealforone(menus?.filter((menu) => {
      return menu.category === 'Meal for 1';
    }));
    setparty_combos(menus?.filter((menu) => {
      return menu.category === 'Party Combos';
    }));
    setnoonion_nogarlic(menus?.filter((menu) => {
      return menu.category === 'No Onion No Garlic';
    }));

  }, [menus])

  useEffect(() => {
    console.log(recommended);
    console.log(new_launches);
    console.log(veg_pizza);
    console.log(non_veg_pizza);
    console.log(beverages);
    console.log(garlicbreads_more);
    console.log(pizza_mania);
    console.log(value_combos);
    console.log(desserts);
    console.log(mealforone);
    console.log(party_combos);
    console.log(noonion_nogarlic);
  }, [noonion_nogarlic])

  if (loading)
    return (
      <p className=" flex items-center justify-center">
        Loading ....
      </p>
    );
  if (error)
    return (
      <p className=" flex items-center justify-center">
        Oops! Something went wrong ....
      </p>
    );

  return (


    <div className=' w-3/4'>

      {/* Recommended */}
      <div >

        <div className="relative my-12">
          <div className='-z-0 border-b-2'></div>
          <div className="absolute -top-7 mx-8 py-4 px-8 bg-[#0067a7] text-white text-xl rounded-full " id="recommended">Recommended</div>

        </div>
        {/* <div className='category'>Recommended</div> */}
        <div className='flex flex-wrap'>
          {

            recommended?.map((menu, i) => (

              <MenuCard key={i} menu={menu} />

            ))
          }
        </div>
      </div>

      {/* New Launches */}
      <div>

        <div className="relative my-12">
          <div className='-z-0 border-b-2'></div>
          <div className="absolute -top-7 mx-8 py-4 px-8 bg-[#0067a7] text-white text-xl rounded-full "  id="new_launches">New Launches</div>

        </div>
        {/* <div className='category'>Recommended</div> */}
        <div className='flex flex-wrap'>
          {
            new_launches?.map((menu, i) => (
              <MenuCard key={i} menu={menu} />

            ))
          }
        </div>
      </div>

      {/* Veg Pizza */}
      <div >
        <div className="relative my-12">
          <div className='-z-0 border-b-2'></div>
          <div className="absolute -top-7 mx-8 py-4 px-8 bg-[#0067a7] text-white text-xl rounded-full " id="veg_pizza">Veg Pizza</div>

        </div>
        {/* <div className='category'>Recommended</div> */}
        <div className='flex flex-wrap'>
          {

            veg_pizza?.map((menu, i) => (

              <MenuCard key={i} menu={menu} />

            ))
          }
        </div>
      </div>

      {/* Non Veg Pizza */}
      <div >
      <div className="relative my-12">
        <div className='-z-0 border-b-2'></div>
        <div className="absolute -top-7 mx-8 py-4 px-8 bg-[#0067a7] text-white text-xl rounded-full " id="non_veg_pizza">Non Veg Pizza</div>

      </div>
      {/* <div className='category'>Recommended</div> */}
      <div className='flex flex-wrap'>
        {

          non_veg_pizza?.map((menu, i) => (

            <MenuCard key={i} menu={menu} />

          ))
        }
      </div>
      </div>

      {/* Beverages */}
      <div >
      <div className="relative my-12">
        <div className='-z-0 border-b-2'></div>
        <div className="absolute -top-7 mx-8 py-4 px-8 bg-[#0067a7] text-white text-xl rounded-full " id="beverages">Beverages</div>

      </div>
      {/* <div className='category'>Recommended</div> */}
      <div className='flex flex-wrap'>
        {

          beverages?.map((menu, i) => (

            <MenuCard key={i} menu={menu} />

          ))
        }
      </div>
      </div>

      {/* Garlic Breads & More */}
      <div >
      <div className="relative my-12">
        <div className='-z-0 border-b-2'></div>
        <div className="absolute -top-7 mx-8 py-4 px-8 bg-[#0067a7] text-white text-xl rounded-full " id="garlicbreads_more">Garlic Breads & More</div>

      </div>

      <div className='flex flex-wrap'>
        {

          garlicbreads_more?.map((menu, i) => (

            <MenuCard key={i} menu={menu} />

          ))
        }
      </div>
      </div>

      {/* Pizza Mania */}
      <div >
      <div className="relative my-12">
        <div className='-z-0 border-b-2'></div>
        <div className="absolute -top-7 mx-8 py-4 px-8 bg-[#0067a7] text-white text-xl rounded-full " id="pizza_mania">Pizza Mania</div>

      </div>

      <div className='flex flex-wrap'>
        {

          pizza_mania?.map((menu, i) => (

            <MenuCard key={i} menu={menu} />

          ))
        }
      </div>
      </div>

      {/* Value Combos */}
      <div >
      <div className="relative my-12">
        <div className='-z-0 border-b-2'></div>
        <div className="absolute -top-7 mx-8 py-4 px-8 bg-[#0067a7] text-white text-xl rounded-full " id="value_combos">Value Combos</div>

      </div>

      <div className='flex flex-wrap'>
        {

          value_combos?.map((menu, i) => (

            <MenuCard key={i} menu={menu} />

          ))
        }
      </div>
      </div>

      {/* Desserts */}
      <div >
      <div className="relative my-12">
        <div className='-z-0 border-b-2'></div>
        <div className="absolute -top-7 mx-8 py-4 px-8 bg-[#0067a7] text-white text-xl rounded-full " id="desserts">Desserts</div>

      </div>

      <div className='flex flex-wrap'>
        {

          desserts?.map((menu, i) => (

            <MenuCard key={i} menu={menu} />

          ))
        }
      </div>
      </div>

      {/* Meal for 1 */}
      <div >
      <div className="relative my-12">
        <div className='-z-0 border-b-2'></div>
        <div className="absolute -top-7 mx-8 py-4 px-8 bg-[#0067a7] text-white text-xl rounded-full " id="mealforone">Meal for 1</div>

      </div>

      <div className='flex flex-wrap'>
        {

          mealforone?.map((menu, i) => (

            <MenuCard key={i} menu={menu} />

          ))
        }
      </div>
      </div>

      {/* Party Combos */}
      <div >
      <div className="relative my-12">
        <div className='-z-0 border-b-2'></div>
        <div className="absolute -top-7 mx-8 py-4 px-8 bg-[#0067a7] text-white text-xl rounded-full " id="party_combos">Party Combos</div>

      </div>

      <div className='flex flex-wrap'>
        {

          party_combos?.map((menu, i) => (

            <MenuCard key={i} menu={menu} />

          ))
        }
      </div>
      </div>

      {/* No Onion No Garlic */}
      <div >
      <div className="relative my-12">
        <div className='-z-0 border-b-2'></div>
        <div className="absolute -top-7 mx-8 py-4 px-8 bg-[#0067a7] text-white text-xl rounded-full " id="noonion_nogarlic">No Onion No Garlic</div>

      </div>

      <div className='flex flex-wrap'>
        {

          noonion_nogarlic?.map((menu, i) => (

            <MenuCard key={i} menu={menu} />

          ))
        }
      </div>
      </div>






    </div>
  )
}

export default MenuCards