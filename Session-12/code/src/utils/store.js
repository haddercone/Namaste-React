import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 *  Crate Store:
 *  - configureStore() - imported from rtk (@reduxjs/toolkit)
 *
 *  Provided store to app:
 *  <Provider store = {store} /> // Provider imported from react-redux
 *
 *  Slice:
 *  CreateSlice - imported from rtk
 */
