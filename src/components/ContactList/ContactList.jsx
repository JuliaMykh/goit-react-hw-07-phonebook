import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { ButtonContact } from './ContactList.styled';
import { useGetContactsQuery, useDeleteContactMutation } from '../../redux/contactsSliceApi';
import { Loader } from '../Loader/Loader';

export const ContactList = () => {

  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const [deleteContact, result] = useDeleteContactMutation();
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

        {result.isLoading || isLoading && <Loader />}

        {contacts && 
        filtredContacts().map(({name, phone, id}) => {
          return (
            <li key={id}>
              <p>{name} : {phone} </p>
              <ButtonContact
                type="button"
                onClick={() => deleteContact(id)}
                contactId={id}
                // disabled={result.isLoading}
              >
                Delete
              </ButtonContact>
            </li>
          );
            })
        }
            
        </ul>
    );
}
