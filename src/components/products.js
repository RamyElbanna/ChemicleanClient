import React, { Component } from 'react';
import { saveDataSheet } from '../service/service_proxy';

export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isSaved: false,
        };
    }
    // save local copy event
    handleSave = (productId) => {
        saveDataSheet(productId, this)
    };
    // open socket
    openSocket = () => {
        // connet to socket
        let socket = new WebSocket('ws://localhost:52308/ws');
    }

    // view modal
    render() {
        const { items } = this.props;
        const finalProducts = items.map(item => {
            return (
                <tr id={item.id}>
                    <td>{item.name}</td>
                    <td>{item.supplierName}</td>
                    <td><a href={item.url} target='_blank'>Data Sheet</a></td>
                    <td><button onClick={() => { this.handleSave(item.id) }}>Save Document</button></td>
                    <td>{item.updatedAt}</td>
                </tr>
            );
        });
        return (
            <div>
                <h1>List all Products</h1>
                <button onClick={this.openSocket}>Open Socket</button>
                <table id='products' border="1">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Supplier Name</th>
                            <th>Supplier data sheet</th>
                            <th>Actions</th>
                            <th>Updated Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finalProducts}
                    </tbody>
                </table>
            </div>
        )
    }

}