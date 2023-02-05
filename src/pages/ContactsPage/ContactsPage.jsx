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
  const { contacts, isLoading } = useContacts();
  const filteredValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(res => res)
      .catch(() => toast.error("Error! Can't download contacts"));
  }, [dispatch]);

  const handleAddContact = newContact => {
    const find = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (find) {
      toast.warn(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact))
      .unwrap()
      .then(res => res)
      .catch(() => toast.error("Error! Can't add contacts"));
  };

  const handleFilter = value => {
    dispatch(filter(value));
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filteredValue.toLowerCase())
  );

  return (
    <main>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onAddContact={handleAddContact} />
        <Title>My Contacts</Title>
        <Filter onFilter={handleFilter} />
        {isLoading && <BasicLoader />}
        {contacts.length > 0 ? (
          <ContactList contacts={filteredContacts} />
        ) : (
          <PlaceholderEmptyList>
            There are no contacts here{' '}
            <PermContactCalendarIcon sx={{ ml: 1 }} />
          </PlaceholderEmptyList>
        )}
      </Section>
    </main>
  );
};

export default ContactsPage;
