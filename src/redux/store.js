import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedReducerMode } from './mode/modeSlice';
import { persistedReducerAuth } from './auth/authSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    auth: persistedReducerAuth,
    mode: persistedReducerMode,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware,
});

export const persistor = persistStore(store);
