import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { addContact } from 'redux/contacts/operations';
import { filter } from 'redux/filter/filterSlice';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useContacts } from 'components/hooks/useContacts';
import BasicLoader from 'components/Loaders/BasicLoader/BasicLoader';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Section, Title, PlaceholderEmptyList } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useContacts();
  const filteredValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    const find = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (find) {
      toast.warn(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const handleFilter = value => {
    dispatch(filter(value));
  };

  const filteredContacts = contacts
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filteredValue.toLowerCase())
      )
    : [];

  return (
    <main>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onAddContact={handleAddContact} />
        <Title>My Contacts</Title>
        <Filter onFilter={handleFilter} />
        {isLoading && <BasicLoader />}
        {contacts && contacts.length > 0 ? (
          <ContactList contacts={filteredContacts} />
        ) : (
          <PlaceholderEmptyList>
            There are no contacts here{' '}
            <PermContactCalendarIcon sx={{ ml: 1 }} />
          </PlaceholderEmptyList>
        )}
        {error && toast.error('Something went wrong...')}
      </Section>
    </main>
  );
};

export default ContactsPage;
