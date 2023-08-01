import { nanoid } from 'nanoid';
import { EachContact } from './EachContact';

export const ContactsList = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <EachContact key={nanoid(10)} contact={contact} />
        ))}
      </ul>
    </>
  );
};
