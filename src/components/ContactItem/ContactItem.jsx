import React from "react";
import { ButtonContact } from './ContactItem.styled';
import { useDeleteContactMutation } from '../../redux/contactsSliceApi';


export const ContactItem = ({name, phone, id}) => {
    
    const [deleteContact, result] = useDeleteContactMutation();
    
    return (
        <>
            <p>{name} : {phone} </p>
            <ButtonContact
                type="button"
                onClick={() => deleteContact(id)}
                contactId={id}
                disabled={result.isLoading}
            >
                Delete
            </ButtonContact>
            
        </>
    )
}