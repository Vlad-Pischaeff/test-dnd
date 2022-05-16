import { combineReducers } from "@reduxjs/toolkit";
import itemsReducer from './slices/items';
import selectedItemReducer from './slices/selectedItem';

export default combineReducers({
  items: itemsReducer,
  selectedItem: selectedItemReducer
})