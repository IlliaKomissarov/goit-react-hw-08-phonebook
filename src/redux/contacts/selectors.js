export const selectContacts = state => state.phonebook.contacts.items;
export const selectisLoading = state => state.phonebook.contacts.isLoading;
export const selectError = state => state.phonebook.contacts.error;
export const selectFilter = state => state.filter;
export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
