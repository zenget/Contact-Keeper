import React, { Fragment } from 'react'
import ContactFilter from '../contacts/ContactFilter';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
const Home = () => (
    <div className='grid-2'>
        <div>
            <ContactForm />
        </div>
        <div>
            <ContactFilter />
            <Contacts />
        </div>
    </div>
)

export default Home;