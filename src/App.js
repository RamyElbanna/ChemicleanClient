import React, { Component } from 'react';
import Product from './components/products';
import './App.css';
import getProducts from './service/service_proxy';

class App extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        getProducts(this);
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Product items={this.state.items} />
                </div>

            );
        }
    }

}

export default App;