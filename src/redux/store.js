import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_CONTACT':
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
    case 'DELETE_CONTACT':
      return {
        contacts: state.contacts.filter(item => item.id !== payload),
        filter: state.filter,
      };
    case 'FILTER_CONTACTS':
      return {
        contacts: state.contacts,
        filter: payload.target.value,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
