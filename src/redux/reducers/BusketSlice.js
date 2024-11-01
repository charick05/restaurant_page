import { createSlice } from "@reduxjs/toolkit";

const BusketSlice = createSlice({
   name: 'busket',
   initialState: {
      products: [],
      totalPrice: 0,
      login: false,
      isPage: 'register',
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
      },

      clearBasket: state => {
         state.products = []
      },

      islogin: (state) => {
         state.login = true;
      },

      logOut: state => {
         state.login = false;
      },

      goToRegister: state => {
         state.isPage = 'register'
      },
      goToLogin: state => {
         state.isPage = 'login'
      }
   }
});

export const {addProduct, removeProduct, islogin, goToRegister, goToLogin, logOut, clearBasket} = BusketSlice.actions;
export default BusketSlice.reducer;