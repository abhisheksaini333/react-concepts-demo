import React, { Component } from 'react';
import queryString from 'query-string';

export default class Contact extends Component {

    constructor() {
        super();
        this.state = {
            userId: 0,
            email: ''
        }
    }

    componentDidMount() {
        if (this.props.location) {
            const query = queryString.parse(this.props.location.search);
            const { email, userId } = query;
            // you can Make API call to fetch the data of the user
            // you can store this data in the state
            this.setState({
                userId,
                email
            });
        }
    }
    render() {
        const { userId, email } = this.state;
        return (
            <div style={ { border: '2px solid brown', margin: '20px', padding: '15px' } }>
                Contact works !!
                <h5>{userId}</h5>
                <h5>{email}</h5>
            </div>
        )
    }
}
