import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/Authslice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
