import React, { useReducer } from 'react';
import { v1 as uuid } from "uuid";
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR
} from '../types';

const ContactState = props => {

    const initialState = {
        contacts: [
            {
                _id: 1,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                _id: 2,
                name: 'Sara Watson',
                email: 'sara@gmail.com',
                phone: '222-222-222',
                type: 'personal'
            },
            {
                _id: 3,
                name: 'Dawit Getachew',
                email: 'dawit.getachew@gmail.com',
                phone: '333-333-333',
                type: 'professional'
            }
        ],
        current: null,
        filtered: null,
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // Update Contact
    const updateContact = contact => {

        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };


    // Filter Contacts
    const filterContacts = text => {

        dispatch({ type: FILTER_CONTACTS, payload: text });
    };

    // Filter Current
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };
    // Delete Contact
    const deleteContact = _id => {
        dispatch({ type: DELETE_CONTACT, payload: _id });
    };

    // Set Current
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };
    // Clear Current
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };
    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                updateContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                filterContacts,
                clearFilter

            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;