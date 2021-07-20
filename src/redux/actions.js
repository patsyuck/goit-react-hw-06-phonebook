import types from './types';
import { createAction } from '@reduxjs/toolkit';

/*export const addContact = contact => ({
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
});*/

export const addContact = createAction(types.ADD);

export const deleteContact = createAction(types.DEL);

export const filterContacts = createAction(types.FILTER);
