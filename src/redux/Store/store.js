import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Features/productSlice";

const store = configureStore({
  reducer: productSlice,
});

export default store;
