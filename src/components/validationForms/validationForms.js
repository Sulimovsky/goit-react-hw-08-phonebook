export const validationFormPassword = value => {
  if (value === '') return false;

  return value.length < 7;
};

export const validationContactsFormName = value => {
  if (value === '') return false;

  return !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/gi.test(
    value
  );
};

export const validationContactsFormNumber = value => {
  if (value === '') return false;

  return !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/gi.test(
    value
  );
};
