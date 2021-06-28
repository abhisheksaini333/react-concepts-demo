import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';

import Product from './Product';
import Manufacturer from './Manufacturer';

export default class Products extends Component {
    render() {
        return (
            <div>
                <h3>Details about the products</h3>
                <ul>
                    <li>
                        <Link to="/products/details">Product Details</Link>
                    </li>
                    <li>
                        <Link to="/products/manufacturer">Product Maker</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/products">
                        <i>Select any one of the option above</i>
                    </Route>
                    <Route path="/products/details">
                        <Product/>
                    </Route>
                    <Route path="/products/manufacturer">
                        <Manufacturer/>
                    </Route>
                </Switch>
            </div>
        )
    }
}
