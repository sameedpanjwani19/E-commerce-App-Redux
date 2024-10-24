import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addCartItem: (state, action) => {
            const itemInCart = state.cartItems.find(
              (item) => item.id === action.payload.item.id
            );
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              state.cartItems.push({ ...action.payload.item, quantity: 1 });
            }
          },
    }
}) 


export const { addCartItem  } = cartSlice.actions
export default cartSlice.reducer