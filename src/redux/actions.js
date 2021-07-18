import types from './types';

export const addContact = contact => ({
  type: types.ADD,
  payload: contact,
});

export const deleteContact = id => ({
  type: types.DEL,
  payload: id,
});

export const filterContacts = event => ({
  type: types.FILTER,
  payload: event,
});
