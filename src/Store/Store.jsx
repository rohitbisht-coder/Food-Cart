import { configureStore } from "@reduxjs/toolkit";
import { cartdata } from "./slice/CartData";
const store = configureStore({
  reducer: {
    data: cartdata.reducer,
  },
});

export { store };
