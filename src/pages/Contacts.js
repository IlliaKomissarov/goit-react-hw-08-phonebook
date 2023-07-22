import { Section } from '../components/Section/Section';
import { Filter } from '../components/Filter/Filter';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Wrap } from '../components/App.styled';
//
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectisLoading,
  selectError,
  selectFilteredContacts,
} from '../redux/contacts/selectors';
import { fetchContacts, addContact } from '../redux/contacts/operations';
import { useEffect } from 'react';
//

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilteredContacts);

  const newContact = name => {
    contacts.find(
      contact => contact.name.toLowerCase() === name.name.toLowerCase()
    )
      ? alert(`${name.name} is already in contacts`)
      : dispatch(addContact(name));
  };

  const handleSubmit = (values, { resetForm }) => {
    newContact(values);
    resetForm();
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrap>
      <ContactForm handleSubmit={handleSubmit} />
      <Filter />
      <Section title={`Contacts list`}>
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {contacts.length > 0 && <ContactsList contacts={filter} />}
      </Section>
    </Wrap>
  );
}
