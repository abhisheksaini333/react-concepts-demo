import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    onNavigation = (path) => {
        this.props.history.push(path);
    }
    render() {
        const userId = 1234;
        const email = 'abhishek_saini@live.com'
        return (
            <div>
                <nav>
                    <button onClick={() => this.onNavigation('/home')}>Home</button>
                    <button onClick={() => this.onNavigation(`/contact?userId=${userId}&email=${email}`)}>Contact</button>
                </nav>
            </div>
        )
    }
}

export default withRouter(Header);
