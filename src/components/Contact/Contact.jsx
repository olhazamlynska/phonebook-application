import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import {
  ContactsItem,
  ContactsName,
  ContactsPhone,
  DeleteBtn,
} from 'components/Contact/Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => Notify.success('You delete contact!'))
      .catch(() => Notify.failure('Something went wrong...Try again!'));
  };
  return (
    <>
      <ContactsItem>
        <ContactsName>{contact.name}:</ContactsName>
        <ContactsPhone>{contact.number} </ContactsPhone>

        <DeleteBtn onClick={handleDelete} aria-label="delete">
          Delete
        </DeleteBtn>
      </ContactsItem>
    </>
  );
};
