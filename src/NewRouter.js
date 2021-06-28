import { 
    Link, 
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

import React, { Component } from 'react'

import Home from './Components/layout/Home';
import Contact from './Components/layout/Contact';
import Login from './Components/auth/Login';
import Logout from './Components/auth/Logout';
import Products from './Components/layout/Products';
import Notfound from './Components/error/Notfound';

export default class NewRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/home">
                            <Home/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/logout">
                            <Logout/>
                        </Route>
                        <Route path="/products">
                            <Products/>
                        </Route>
                        <Route path="*">
                            <Notfound/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

