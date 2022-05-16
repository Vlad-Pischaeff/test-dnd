import { createSlice } from "@reduxjs/toolkit";

const selectedItem = createSlice({
  name: 'selectedItem',
  initialState: {},
  reducers: {
    setItem: (state, { payload }) => {
      state.selectedItem = payload.item;
    }
  }
})

export const { setItem } = selectedItem.actions;
export default selectedItem.reducer;