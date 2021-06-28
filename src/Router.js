import { Component } from 'react';
import { Route, BrowserRouter, Router, Link } from 'react-router-dom';

import Login from './Components/auth/Login';
import Logout from './Components/auth/Logout';
import Notfound from './Components/error/Notfound';
import Home from './Components/layout/Home';
import Contact from './Components/layout/Contact';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';


class Myrouter extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header/>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/not-found" component={Notfound} />
                    <Footer/>
                </BrowserRouter>
            </>
        )
    }
}

export default Myrouter;