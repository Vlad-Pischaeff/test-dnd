import { createSlice } from "@reduxjs/toolkit";

const items = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    getItems: (state, action) => {
      state.items = [];
    }
  }
})

export const { getItems } = items.actions;
export default items.reducer;