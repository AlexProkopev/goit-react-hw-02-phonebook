import React from 'react';
import Phonebook from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import Filters from './Filters/Filters';
import css from './App.module.css';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = contacts => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === contacts.name.toLowerCase()
      )
    ) {
      alert(`${contacts.name} is already in contacts`);
      return;
    } else if (
      this.state.contacts.some(contact => contact.number === contacts.number)
    ) {
      alert(`${contacts.number} is already in contacts`);
      return;
    }

    const uniqueId = nanoid();
    const formattedName =
      contacts.name.charAt(0).toUpperCase() + contacts.name.slice(1);

    this.setState(
      {
        contacts: [
          ...this.state.contacts,
          { id: uniqueId, name: formattedName, number: contacts.number },
        ],
      });
  };

  hendleDeletedContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  handleFilterContact = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    })
  }

  getContacts = () => {
    const {contacts,filter} = this.state

    const filterLowerCase = filter.toLowerCase();

    return contacts.filter(({name}) =>
      name.toLowerCase().includes(filterLowerCase)
    )
  }


  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <Phonebook
          handleAddContact={this.handleAddContact}
          contactState={this.state.contacts}
        />

        <>
          <h2 className={css.title}>Contacts</h2>
          {this.state.contacts.length ? (
            <Filters handleFilterContact={this.handleFilterContact} value={this.state.filter} />
          ) : (
            <h2 className={css.title}>Создайте первый контакт</h2>
          )}
        </>
        <Contacts
          contacts={this.getContacts()}
          hendleDeletedContact={this.hendleDeletedContact}
        />
      </div>
    );
  }
}
