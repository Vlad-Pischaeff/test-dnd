import { createSlice } from "@reduxjs/toolkit";

const items = createSlice({
  name: "items",
  initialState: {
    "list": [
      { 
        'id': 1,
        'name': 'Element 1',
        'group': 1,
        'ip1': 'input 1',
        'ip2': 'input 2',
        'op1': 'output 1',
        'op2': 'output 2'
      },
      { 
        'id': 2,
        'name': 'Element 2',
        'group': 1,
        'ip1': 'input 1',
        'ip2': 'input 2',
        'op1': 'output 1',
        'op2': 'output 2'
      },     { 
        'id': 3,
        'name': 'Element 3',
        'group': 1,
        'ip1': 'input 1',
        'ip2': 'input 2',
        'op1': 'output 1',
        'op2': 'output 2'
      },
      { 
        'id': 4,
        'name': 'Element 1',
        'group': 2,
        'ip1': 'input 1',
        'ip2': 'input 2',
        'op1': 'output 1',
        'op2': 'output 2'
      },
      { 
        'id': 5,
        'name': 'Element 1',
        'group': 3,
        'ip1': 'input 1',
        'ip2': 'input 2',
        'op1': 'output 1',
        'op2': 'output 2'
      },
      { 
        'id': 6,
        'name': 'Element 2',
        'group': 3,
        'ip1': 'input 1',
        'ip2': 'input 2',
        'op1': 'output 1',
        'op2': 'output 2'
      },
    ],
    "selected": {}
  },
  reducers: {
    selectItem: (items, { payload }) => {
      items.selected = items.list.find(n => n.id === payload.id);
    },
  }
})

export const { selectItem } = items.actions;
export default items.reducer;