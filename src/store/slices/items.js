import { createSlice } from "@reduxjs/toolkit";
import { data } from './data';

const items = createSlice({
  name: "items",
  initialState: {
    "list": data.list,
    "selected": {},
    "groups": { '1': 'Input', '2': 'Standard', '3': 'Output'}
  },
  reducers: {
    selectItem: (items, { payload }) => {
      items.selected = items.list.find(n => n.id === payload.id);
    },
  }
})

export const { selectItem } = items.actions;
export default items.reducer;