import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showSnackbar } from "./snackbarSlice";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getAuthToken = (getState) => getState().auth.token;

// Thunk to fetch products with pagination
export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (page = 1, { getState, rejectWithValue, dispatch }) => {
    try {
      const token = getAuthToken(getState);
      const response = await axios.get(
        `${API_BASE_URL}/api/products?page=${page}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch products";
      dispatch(showSnackbar({ message: errorMessage, type: "error" }));
      return rejectWithValue(errorMessage);
    }
  }
);

// Thunk to create a new product
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData, { getState, rejectWithValue, dispatch }) => {
    try {
      const token = getAuthToken(getState);
      const response = await axios.post(
        `${API_BASE_URL}/api/products`,
        productData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(
        showSnackbar({ message: "Product added successfully", type: "success" })
      );
      return response.data;
    } catch (error) {
      dispatch(
        showSnackbar({ message: "Failed to add product", type: "error" })
      );
      return rejectWithValue(error.response?.data || "Failed to add product");
    }
  }
);

// Thunk to edit a product
export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (productData, { getState, rejectWithValue, dispatch }) => {
    try {
      const token = getAuthToken(getState);
      const response = await axios.put(
        `${API_BASE_URL}/api/products`,
        productData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(
        showSnackbar({
          message: "Product updated successfully",
          type: "success",
        })
      );
      return response.data;
    } catch (error) {
      dispatch(
        showSnackbar({ message: "Failed to edit product", type: "error" })
      );
      return rejectWithValue(error.response?.data || "Failed to edit product");
    }
  }
);

// Thunk to fetch product count
export const fetchProductCount = createAsyncThunk(
  "products/fetchCount",
  async (_, { getState, rejectWithValue, dispatch }) => {
    try {
      const token = getAuthToken(getState);
      const response = await axios.get(`${API_BASE_URL}/api/products/count`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.products.count;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch products count";
      dispatch(showSnackbar({ message: errorMessage, type: "error" }));
      return rejectWithValue(errorMessage);
    }
  }
);

const initialState = {
  products: { data: [], meta: {} },
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = {
          data: action.payload.products.data,
          meta: action.payload.products.meta,
        };
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create Product
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.data.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Edit Product
      .addCase(editProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.data = state.products.data.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Product Count
      .addCase(fetchProductCount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductCount.fulfilled, (state, action) => {
        state.loading = false;
        state.productCount = action.payload;
      })
      .addCase(fetchProductCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
