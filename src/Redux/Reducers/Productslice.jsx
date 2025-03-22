import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getAuthToken = (getState) => getState().auth.token; 

// Thunk to fetch products with pagination
export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (page = 1, { getState, rejectWithValue }) => {
    try {
      const token = getAuthToken(getState);
      const response = await axios.get(`${API_BASE_URL}/api/products?page=${page}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch products");
    }
  }
);

// Thunk to create a new product
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData, { getState, rejectWithValue }) => {
    try {
      const token = getAuthToken(getState);
      const response = await axios.post(`${API_BASE_URL}/api/products`, productData, {
        headers: { Authorization: `Bearer ${token}` }, 
      });
      return response.data; 
    } catch (error) {
      console.error("API Error:", error.response?.data);
      return rejectWithValue(error.response?.data || "Failed to add product");
    }
  }
);

// Thunk to edit a product
export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (productData, { getState, rejectWithValue }) => {
    try {
      const token = getAuthToken(getState);
      const response = await axios.put(`${API_BASE_URL}/api/products`, productData, {
        headers: { Authorization: `Bearer ${token}` }, 
      });
      return response.data; 
    } catch (error) {
      console.error("API Error:", error.response?.data);
      return rejectWithValue(error.response?.data || "Failed to edit product");
    }
  }
);

// Thunk to get total product count
export const fetchProductCount = createAsyncThunk(
  'products/fetchCount',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getAuthToken(getState);
      const response = await axios.get(`${API_BASE_URL}/api/products/count`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data.products.count; 
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch product count");
    }
  }
);

const initialState = {
  products: { data: [], meta: {} },
    loading: false,
    error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      state.error = action.error.message;
    })

      // Create Product
    .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(createProduct.fulfilled, (state, action) => {
      if (!Array.isArray(state.products)) {
          state.products = [];
      }
      
      state.products.push(action.payload);
      state.loading = false;
    })
    .addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(editProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(editProduct.fulfilled, (state, action) => {
      state.loading = false;
      // Update the edited product in the product list
      const updatedProduct = action.payload;
      state.products.data = state.products.data.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
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