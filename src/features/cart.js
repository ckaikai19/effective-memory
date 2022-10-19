import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      if (
        state.value.filter((book) => book.id === action.payload.id).length > 0
      ) {
        state.value.map((book) => {
          if (book.id === action.payload.id) {
            state.totalPrice -= book.price;
            book.price = action.payload.price;
            book.quantity = action.payload.quantity;
            state.totalPrice += action.payload.price;
            
          }

          
        });
      } else {
        state.value.push(action.payload);
        state.totalPrice += parseFloat(action.payload.price.toFixed(2));
      }
    },

    deleteFromCart: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id);

      state.totalPrice -= parseFloat(action.payload.price);
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
