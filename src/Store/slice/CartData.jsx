import { createSlice } from "@reduxjs/toolkit";
const cartdata = createSlice({
  name: "Cartdata",
  initialState: [],
  reducers: {
    addCart(item, action) {
      let index = item.findIndex((val) => {
        return val.id == action.payload.id;
      });
      if (index >= 0) {
        item[index].qnty += 1;
      } else {
        item.push(action.payload);
      }
    },
    removecart(item, action) {
      return item.filter((val, index) => {
        return index !== action.payload;
      });
    },

    decQuan(state, action) {
      let inde = state.findIndex((ele) => {
        return ele.id == action.payload.id;
      });
      if (state[inde].qnty > 1) {
        state[inde].qnty -= 1;
      }else {
        state.splice(state[inde], 1);
      }
    },
  },
});
export const { addCart, removecart, decQuan } = cartdata.actions;
export { cartdata };
