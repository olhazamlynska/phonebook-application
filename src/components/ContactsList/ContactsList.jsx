import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';
import {
  ContactsListSTyle,
  Notification,
} from 'components/ContactsList/ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {contacts.length === 0 && !isLoading && (
        <Notification>Sorry,there no contact!</Notification>
      )}

      <ContactsListSTyle>
        {contacts.map(contact => {
          return <Contact key={contact.id} id={contact.id} contact={contact} />;
        })}
      </ContactsListSTyle>
    </>
  );
};
