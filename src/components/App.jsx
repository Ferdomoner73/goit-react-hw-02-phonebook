import { Component } from 'react';
import { Container } from './app.styled';
import { ContactsForm } from './Form';
import { ContactsList } from './Contacts';

const INITITAL_VALUES = {
  contacts: [],
};

export class App extends Component {
  state = {
    ...INITITAL_VALUES,
  };

  addNewContact = () => {};

  handleSubmit = e => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, e.name],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <ContactsForm handleSubmit={this.handleSubmit} />
        <ContactsList contacts={contacts} />
      </Container>
    );
  }
}
