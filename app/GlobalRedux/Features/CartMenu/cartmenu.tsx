'use client';

import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface cartState {
    value: {}[]
}

const initialState = {
    value: []
} as cartState

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Object>) => {

            const a = JSON.stringify(action.payload);
            const b = JSON.parse(a);

            console.log(action.payload)
            console.log(current(state).value)

            const item = current(state).value.find((menu) => {
                const c = JSON.stringify(menu);
                const d = JSON.parse(c);

                return d.menu_id === b.menu_id
            })

            console.log("item=" + item);

            if (item) {
                state.value = state.value.filter((val) => {
                    const c = JSON.stringify(val);
                    const d = JSON.parse(c);
                    return d.menu_id !== b.menu_id;
                })

                const e = JSON.stringify(item);
                let f = JSON.parse(e);

                f.count += 1;

                state.value = [...state.value, f]

            }
            else {
                state.value = [...state.value, action.payload];
            }


        },
        remove: (state, action) => {
            const a = JSON.stringify(action.payload);
            const b = JSON.parse(a);

            const item = current(state).value.find((menu) => {
                const c = JSON.stringify(menu);
                const d = JSON.parse(c);

                return d.menu_id === b.menu_id
            })

            console.log("item=" + item);

            if (item) {
                state.value = state.value.filter((val) => {
                    const c = JSON.stringify(val);
                    const d = JSON.parse(c);
                    return d.menu_id !== b.menu_id;
                })

                const e = JSON.stringify(item);
                let f = JSON.parse(e);

                f.count -= 1;

                state.value = f.count>0?[...state.value, f]:state.value

            }
        },
        empty:(state)=>{state.value = [...initialState.value]}

    }
})

export const { add, remove,empty } = cartSlice.actions;

export default cartSlice.reducer;