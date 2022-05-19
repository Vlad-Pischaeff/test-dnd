import { createSlice } from "@reduxjs/toolkit";
import { data } from './data';

const items = createSlice({
  name: "items",
  initialState: {
    "list": data.list,
    "selected": undefined,
    "groups": { '1': 'Input', '2': 'Standard', '3': 'Output'},
    "transfer": { 'source': null, 'target': null, 'position': null, 'group': null},
  },
  reducers: {
    selectItem: (items, { payload }) => {
      items.selected = payload.id;
    },
    setTransferParams: (items, { payload }) => {
      const keys = Object.keys(payload);
      const { transfer } = items;
      keys.forEach(key => { transfer[key] = payload[key] });
    },
    transfetItem: (items, action) => {
      const { transfer, list } = items;
      let indexTarget = list.findIndex(n => n.id === transfer.target);
      let indexSource = list.findIndex(n => n.id === transfer.source);
      let newGroup = list[indexTarget].group;
      indexTarget = indexSource < indexTarget && indexTarget - 1;
      indexTarget = transfer.position === 'after' && indexTarget + 1;
      const element = list.splice(indexSource, 1);
      element[0].group = newGroup;
      list.splice(indexTarget, 0, element[0]);
      console.log('transfetItem...', transfer);
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

export const { 
  selectItem, 
  setTransferParams, 
  transfetItem, 
  addItemPort, 
  removeItemPort } = items.actions;
export default items.reducer;