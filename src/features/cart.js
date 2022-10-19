import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            toast.info("Item Updated 📝", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
      } else {
        state.value.push(action.payload);
        state.totalPrice += parseFloat(action.payload.price.toFixed(2));
        toast.success("Added To Cart 🛒", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },

    deleteFromCart: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id);
      state.totalPrice -= parseFloat(action.payload.price);
      toast.success("Item Deleted 🗑", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
