import { configureStore, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';

/*import { combineReducers } from '@reduxjs/toolkit';
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'secret',
  storage
}*/

const initialState = {
  contacts: JSON.parse(localStorage.getItem('phones')) || [],
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
      const newState = {
        contacts: [...state.contacts, payload],
        filter: state.filter,
      };
      localStorage.setItem('phones', JSON.stringify(newState.contacts));
      return newState;
    }
  },
  [deleteContact]: (state, { payload }) => {
    const newState = {
      contacts: state.contacts.filter(item => item.id !== payload),
      filter: state.filter,
    };
    localStorage.setItem('phones', JSON.stringify(newState.contacts));
    return newState;
  },
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

/*const persistedReducer = persistReducer(persistConfig,
  combineReducers({ reducer })
)
const store = configureStore({
  reducer: {
    persistedReducer,
  },
});
const persistor = persistStore(store)*/

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
/*export default { store, persistor };*/

export default store;
