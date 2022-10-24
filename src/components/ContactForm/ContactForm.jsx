import React from "react";
import { Formik, Form, Field } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {useGetContactsQuery, useAddContactMutation } from '../../redux/contactsSliceApi';
import { LabelForm, SpanForm, ButtonForm } from './ContactForm.styled';

export const ContactForm = () => {

    const [addContact] = useAddContactMutation();
    const { data: contacts } = useGetContactsQuery();

    const handleSubmit = ({ name, phone }, { resetForm }) => {
        // console.log({ name, phone });
        contacts.some(contact => contact.name === name)
        ? alert(
        `${name} is already in contacts.`,
        )
        : addContact({ name, phone });
        
        Notify.success(`The ${name} has been added to your contact list.`);
        
        resetForm();
    };
    
    return (
        <Formik
            initialValues={{ name: '', phone: '' }}
            onSubmit={handleSubmit}
        >
            <Form >
                <LabelForm>
                    <SpanForm>Name</SpanForm> 
                    <Field
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </LabelForm>
                <LabelForm>
                    <SpanForm> Number</SpanForm>
                    <Field
                        type="tel"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </LabelForm>
                <ButtonForm type="submit" >Add Contact</ButtonForm>
            </Form>
        </Formik>
        
    );
};

