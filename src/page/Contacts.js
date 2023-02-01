import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectIsLoading,
  selectContacts,
  selectError,
} from 'redux/contacts/selectors';

const { Helmet } = require('react-helmet');

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {contacts.length > 1 && <FilterContacts />}
      {isLoading && !error && <p>Request on progress...</p>}
      <ContactsList />
    </>
  );
};
export default Contacts;
