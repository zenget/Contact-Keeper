import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AuthState from './context/auth/authState';
import ContactState from './context/contact/ContactState';
import AlertState from './context/alert/AlertState';
import Alerts from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {

  setAuthToken(localStorage.token);
}


const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
