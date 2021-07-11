import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ icon, title }) => {

    const authContext = useContext(AuthContext);

    const contactContext = useContext(ContactContext);

    const { logout, user, isAuthenticated } = authContext;

    const { clearContacts } = contactContext;

    const onLogout = () => {
        logout();
        clearContacts();
    }
    const authLinks = (
        <Fragment>
            <li> Hello {user && user.name}</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-signout-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>

        </Fragment>
    );
    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>

        </Fragment>
    );

    return (
        <nav className="navbar bg-primary">
            <h1>
                <Link to='/'> <i className={icon} /> {title}</Link>
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}

            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: "fas fa-id-card-alt"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
