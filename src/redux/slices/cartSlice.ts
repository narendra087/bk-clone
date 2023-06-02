import { createSlice } from "@reduxjs/toolkit";

import { PaketType } from "../../mocks/paket";

interface SliceState {
  cart: PaketType[]
}

const initialState:SliceState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action?.payload)
    },
    removeCart: (state, action) => {
      console.log(action.payload)
    },
  }
})

export const { addCart, removeCart } = cartSlice.actions

export default cartSlice.reducer