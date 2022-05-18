import { createSlice } from "@reduxjs/toolkit";
import { data } from './data';

const items = createSlice({
  name: "items",
  initialState: {
    "list": data.list,
    "selected": undefined,
    "groups": { '1': 'Input', '2': 'Standard', '3': 'Output'}
  },
  reducers: {
    selectItem: (items, { payload }) => {
      items.selected = items.list.findIndex(n => n.id === payload.id);
    },
    addItemPort: (items, { payload }) => {
      const { list } = items;
      const { id, type, name } = payload;
      const item = list.find(n => n.id === id);
      item[type].push(name);
    },
    removeItemPort: (items, { payload }) => {
      const { list } = items;
      const { id, type, portNum } = payload;
      const item = list.find(n => n.id === id);
      item[type] = item[type].filter((n, i) => i !== portNum);
    }
  }
})

export const { selectItem, addItemPort, removeItemPort } = items.actions;
export default items.reducer;