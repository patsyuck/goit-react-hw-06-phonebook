import React from 'react';
import { connect } from 'react-redux';
import { addContact, deleteContact, filterContacts } from './redux/actions';
import './App.css';
import { ContactForm } from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

function App({ friends, filter, handleInput, handleSubmit, handleDelete }) {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handlerSubmit={contact => handleSubmit(contact)} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={event => handleInput(event)} />
      <ContactList
        friends={friends}
        filter={filter}
        onClick={id => handleDelete(id)}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    friends: state.reducer.contacts,
    filter: state.reducer.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInput: event => dispatch(filterContacts(event)),
    handleSubmit: contact => dispatch(addContact(contact)),
    handleDelete: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
