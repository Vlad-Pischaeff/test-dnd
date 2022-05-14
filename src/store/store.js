import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './slices/items';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
