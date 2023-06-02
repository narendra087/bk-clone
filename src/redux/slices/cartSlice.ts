import { createSlice } from "@reduxjs/toolkit";

import { CartType, GuestType } from "../../types/global";

interface SliceState {
  cartData: CartType[]
  notes: string
  guest: GuestType
}

const initialState:SliceState = {
  cartData: [],
  notes: '',
  guest: {
    name: '',
    phone: undefined,
    location: undefined,
    address: '',
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const foundIndex = state.cartData.findIndex((cart) => cart.slug === action.payload?.slug)
      if (foundIndex !== -1) {
        state.cartData[foundIndex].quantity += action.payload?.quantity 
      } else {
        state.cartData.push(action?.payload)
      }
    },
    changeQuantity: (state, action) => {
      const cartIndex = state.cartData.findIndex((cart) => cart.slug === action.payload?.cart?.slug)
      if (cartIndex !== -1) {
        state.cartData[cartIndex].quantity = action.payload?.quantity
      }
    },
    removeCart: (state, action) => {
      state.cartData = state.cartData.filter((cart) => cart.slug !== action.payload?.slug)
    },
    addNotes: (state, action) => {
      state.notes = action.payload
    },
    addQuest: (state, action) => {
      state.guest = action.payload
    },
  }
})

export const { addCart, changeQuantity, removeCart, addNotes } = cartSlice.actions

export default cartSlice.reducer