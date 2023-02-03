import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  getActions,
  handlePending,
  handlePendingAddContact,
  handleFulfilled,
  handleRejected,
  fetchContactsFulfilledReducer,
  addContactFulfilledReducer,
  deleteContactFulfilledReducer,
} from './helperReducers';

const initialState = {
  items: [],
  isLoading: false,
  isLoadingBtn: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.pending, handlePendingAddContact)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});
