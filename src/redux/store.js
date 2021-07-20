import { configureStore, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = createReducer(initialState, {
  [addContact]: (state, { payload }) => {
    if (
      state.contacts.some(
        item => item.name.toLowerCase() === payload.name.toLowerCase(),
      )
    ) {
      alert(`${payload.name} is already in contacts!`);
      return state;
    } else {
      return {
        contacts: [...state.contacts, payload],
        filter: state.filter,
      };
    }
  },
  [deleteContact]: (state, { payload }) => ({
    contacts: state.contacts.filter(item => item.id !== payload),
    filter: state.filter,
  }),
  [filterContacts]: (state, { payload }) => ({
    contacts: state.contacts,
    filter: payload.target.value,
  }),
});

const store = configureStore({
  reducer: {
    reducer,
  },
});

export default store;
