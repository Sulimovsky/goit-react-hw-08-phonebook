import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const modeSlice = createSlice({
  name: 'mode',
  initialState: { type: 'light' },
  reducers: {
    changeMode(state, action) {
      state.type = action.payload;
    },
  },
});

const persistConfig = {
  key: 'mode',
  storage,
};

export const persistedReducerMode = persistReducer(
  persistConfig,
  modeSlice.reducer
);

export const { changeMode } = modeSlice.actions;
