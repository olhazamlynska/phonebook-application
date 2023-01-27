import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { Box } from 'components/Box/Box';
import { Section } from 'components/Section/Section';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { Notification } from 'components/ContactsList/ContactsList.styled';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as={'main'}>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>

      <Section title="Contacts">
        {contacts.length > 1 && <FilterContacts />}

        {isLoading && !error && (
          <Notification>Request on progress...</Notification>
        )}
        <ContactsList />
      </Section>
    </Box>
  );
};
