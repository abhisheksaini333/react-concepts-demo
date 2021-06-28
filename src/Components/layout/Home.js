import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            todos: []
        };
    }
    componentWillUnmount() {
        
    }
    componentDidMount() {
        // make an API call to get the data
        // set the response in the state object

        fetch('https://jsonplaceholder.typicode.com/todos', { method: 'GET' })
        .then(response => response.json())
        .then((success) => {
            this.setState({
                todos: success
            });
        }).catch((err) => {

        });

        axios.get('http://localhost:6767/products')
        .then((success) => {
            this.setState({
                products: success.data
            });
        }).catch((err) => {

        });
    }
    render() {
        const { todos, products } = this.state;
        return (
            <div>
                <h3>List of Products</h3>
                <ul>
                {
                    products && products.length > 0 ? products.map((item, index) => {
                        return <li key={index}>{item.name} - {item.price}</li>
                    }) : <span>Fetching products....</span>
                }
                </ul>
                <hr/>
                <h3>List of Todos</h3>
                <ul>
                {
                    todos && todos.length > 0 ? todos.map((item, index) => {
                        return <li key={index}>{item.title} - Completed: {item.completed}</li>
                    }) : <span>Fetching todos....</span>
                }
                </ul>
            </div>
        )
    }
}
