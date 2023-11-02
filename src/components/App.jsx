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
    name: '',
    number: "",
    filter: '',
  };

  handleAddContact = contacts => {
    if (this.state.contacts.some(contact => contact.name.toLowerCase() === contacts.name.toLowerCase())) {
      alert(`${contacts.name} is already in contacts`);
      return;
    } else if (
      this.state.contacts.some(contact => contact.number === contacts.number)
    ) {
      alert(`${contacts.number} is already in contacts`);
      return;
    } 



    const uniqueId = nanoid();
    const formattedName = contacts.name.charAt(0).toUpperCase() + contacts.name.slice(1);
    

    this.setState(
      {
        contacts: [
          ...this.state.contacts,
          { id: uniqueId, name: formattedName, number: contacts.number },
        ],
      },
      () => console.log(this.state)
    );
    
  };

  hendleDeletedContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  handleFilterContact = contacts => {
    // Значение поискового запроса из состояния Filters
  };

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <Phonebook
          handleAddContact={this.handleAddContact}
          contactState={this.state.contacts}
        />

        <>
          <h1 className={css.title}>Contacts</h1>
          {this.state.contacts.length  ? <Filters handleFilterContact={this.handleFilterContact} />
          : <h2>Создайте первый контакт</h2>}
        </>
        <Contacts
          contacts={this.state.contacts}
          hendleDeletedContact={this.hendleDeletedContact}
        />
      </div>
    );
  }
}
