import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'fliter',
  initialState: '',
  reducers: {
    filter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filter } = filterSlice.actions;
