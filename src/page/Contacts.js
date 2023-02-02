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
import { Notification } from 'components/ContactsList/ContactsList.styled';
import { Box } from 'components/Box/Box';

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
      <Box>
        {contacts.length > 1 && <FilterContacts />}
        {isLoading && !error && (
          <Notification>Request on progress...</Notification>
        )}
        <ContactsList />
      </Box>
    </>
  );
};
export default Contacts;
