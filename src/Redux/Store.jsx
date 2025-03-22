import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/Authslice";
import productReducer from "./Reducers/Productslice";
import snackbarReducer from "./Reducers/snackbarSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    snackbar: snackbarReducer,
  },
});
