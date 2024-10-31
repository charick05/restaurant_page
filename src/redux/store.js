import { configureStore } from "@reduxjs/toolkit";
import BusketReducer from './reducers/BusketSlice.js'

export const store = configureStore({
   reducer: {
      basket: BusketReducer
   }
});