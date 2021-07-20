/*import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';*/
/*import { combineReducers } from 'redux';*/
import { configureStore, createReducer } from '@reduxjs/toolkit';
/*import types from './types';*/
import { addContact, deleteContact, filterContacts } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

/*const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
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
    case types.DEL:
      return {
        contacts: state.contacts.filter(item => item.id !== payload),
        filter: state.filter,
      };
    case types.FILTER:
      return {
        contacts: state.contacts,
        filter: payload.target.value,
      };
    default:
      return state;
  }
};*/

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

/*const store = createStore(reducer, composeWithDevTools());*/
/*const rootReducer = combineReducers({
  reducer,
})*/
const store = configureStore({
  reducer: {
    reducer,
  },
});

export default store;
