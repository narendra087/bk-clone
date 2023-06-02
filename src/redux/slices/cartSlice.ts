import { createSlice } from "@reduxjs/toolkit";

import { CartType } from "../../types/global";

interface SliceState {
  cartData: CartType[]
}

const initialState:SliceState = {
  cartData: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartData.push(action?.payload)
    },
    removeCart: (state, action) => {
      console.log(action.payload)
    },
  }
})

export const { addCart, removeCart } = cartSlice.actions

export default cartSlice.reducer