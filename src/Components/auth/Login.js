import React, { Component } from 'react';

const loginStyle = {
    color: 'blue',
    fontSize: '30px'
}

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "abhishek_saini@live.com",
            password: ""
        }
    }
    onLogin = () => {
        const  { username, password } = this.state;
        console.log(username + ' ' + password);
        // Make API call to server and get user information / token
    }
    onInputChange = (e, stateVariable) => {
        this.setState(
            {
                [stateVariable]: e.target.value
            }
        );
    }
    render() {
        const { username, password } = this.state;
        return(
            <React.Fragment>
                <div style={{ color: 'red', fontSize: '30px' }}>
                    <h2>User Login</h2>
                    <label>Email:</label>
                    <input type="text" value={username} onChange={(e) => { this.onInputChange(e, 'username') }} />
                    <br/>
                    <br/>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => { this.onInputChange(e, 'password') }}  />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button onClick={this.onLogin}>Login</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;