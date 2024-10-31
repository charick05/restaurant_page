import { createSlice } from "@reduxjs/toolkit";

const BusketSlice = createSlice({
   name: 'busket',
   initialState: {
      products: [],
      totalPrice: 0
   },
   reducers: {
      addProduct: (state, action) => {
         state.products.push(action.payload);
         state.totalPrice += action.payload.price;
      },

      removeProduct: (state, action) => {
         const removedProduct = state.products.find(e => e.id === action.payload.id)
         state.products = state.products.filter(e => e.id !== removedProduct.id);
         state.totalPrice -= action.payload.price;
      }
   }
});

export const {addProduct, removeProduct} = BusketSlice.actions;
export default BusketSlice.reducer;