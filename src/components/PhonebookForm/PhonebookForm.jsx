import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';

import { selectContacts } from 'redux/selectors';
import {
  AllForm,
  Label,
  Input,
  AddBtn,
} from 'components/PhonebookForm/PhonebookForm.styled';
import { addContact } from 'redux/operations';

export function PhonebookForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        Notify.failure('Try again!');
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const isAddedName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isAddedNunber = contacts.some(contact => contact.phone === phone);

    if (isAddedName) {
      Notify.failure(`We have already had contact with name ${name}`);
      return false;
    } else if (isAddedNunber) {
      Notify.failure(`We have already had contact with number ${phone}`);
      return false;
    }

    dispatch(addContact({ name, phone }))
      .unwrap()
      .then(() => Notify.success('You add contact!'))
      .catch(() => Notify.failure('Something went wrong...Try again!'));

    setName('');
    setPhone('');
  };

  return (
    <AllForm action="submit" onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Kate Tart"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="phone">
        Number
        <Input
          type="tel"
          name="phone"
          value={phone}
          placeholder="111-11-11"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <AddBtn type="submit" aria-label="add contact">
        Add contact
      </AddBtn>
    </AllForm>
  );
}
