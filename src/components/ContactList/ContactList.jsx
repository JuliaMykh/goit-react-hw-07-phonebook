import React from "react";
import { useSelector } from 'react-redux';

import { ItemContact } from './ContactList.styled';
import { useGetContactsQuery } from '../../redux/contactsSliceApi';
import { ContactItem } from '../ContactItem/ContactItem';
import { Loader } from '../Loader/Loader';

export const ContactList = () => {

  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);
    
  const filtredContacts = () => {
      if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

    return (    
      <ul>

        {error && <p>{error.data}</p>}

        {isLoading ? (<Loader />) : ''}

        {contacts && 
        filtredContacts().map(({name, phone, id}) => {
          return (
            <ItemContact key={id}>

              <ContactItem name={name} phone={phone} id={id} />

            </ItemContact>
            
          );
            })
        }
            
        </ul>
    );
}
