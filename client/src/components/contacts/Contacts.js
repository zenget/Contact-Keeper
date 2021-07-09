import React, { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem';
const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) {
        return <h4>Please add new Contact</h4>;
    }
    return (
        <Fragment>
            <TransitionGroup>
                {(filtered === null ? contacts : filtered).map(contact => (
                    <CSSTransition key={contact.id} timeout={500} className="item" >
                        <ContactItem contact={contact} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts
