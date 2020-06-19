import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
 state = {
    products:[],
 };
  
    componentDidMount() {
       
        this.loadProducts();
    }
    loadProducts = async () => {
       
       // const response = await api.get('/products');
       const {data} = await api.get('/products');
        //console.log(data);
        this.setState({products: data})
    };
    render() {
 
       // return <h1>Contagem de produtos: {this.state.products.length}</h1>
    return (
        <div className="product-list">
            {this.state.products.map(products => (
                <h2 key={products._id}>{products.title}</h2>
            ))}
        </div>

    );
    
    }   
}