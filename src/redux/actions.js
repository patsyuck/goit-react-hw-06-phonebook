export const addContact = contact => ({
  type: 'ADD_CONTACT',
  payload: contact,
});

export const deleteContact = id => ({
  type: 'DELETE_CONTACT',
  payload: id,
});

export const filterContacts = event => ({
  type: 'FILTER_CONTACTS',
  payload: event.target.value,
});
