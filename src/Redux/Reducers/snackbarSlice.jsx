import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "error", // "error" | "success" | "info"
  open: false,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type || "error";
      state.open = true;
    },
    hideSnackbar: (state) => {
      state.open = false;
      state.message = "";
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
