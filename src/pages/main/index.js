import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

export default class Main extends Component {
 state = {
    products:[],
    //Buscando cm API
    //productInfo:{},
    page:1,
 };
  
    componentDidMount() {
       
        this.loadProducts();
    }
    loadProducts = async (page=1) => {
       
       const {data} = await api.get('/products?page=${page}');
       //Buscando na  API
       // const response = await api.get('/products');
        //console.log(data);
       //const  {productInfo} = response.data ;
        //this.setState({products:docs, ,productInfo,page});

        this.setState({products: data})
    };
//Usar na busca deproduto em uma API que tenha paginação
    //prevPage = () => {
       // const { page,productInfo } = this.states;
     //   if(page ==1 ) return;
   //     const pageNumber = page -1;
 //       this.loadProducts(pageNumber);
//    }
//Buscando na  API
  //  nextPage = () => {
    //    const { page,productInfo } = this.state;
      //  if (page == productInfo.pages) return;
        //const pageNumber = page + 1;
        //this.loadProducts(pageNumber);
    //}



    render() {
        const { products } = this.state;
     //usar isso aqui quando for com a Api
     // const { products,page,productInfo } = this.state;   
        // return <h1>Contagem de produtos: {this.state.products.length}</h1>
        return (
            <div className="product-list">
                {products.map(products => (
                    <article key={products._id}>
                        <strong>{products.title}</strong>
                        <p>{products.description}</p>
                        <Link to={'/products/${product._id}'}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button  onClick={this.nextPage}>Próximo</button>
                </div>
            </div>

        );
           
    }   
}


//usar esses daq quando for com API
//<button disabled={page===1} onClick={this.prevPage}>Anterior</button>
//<button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
//e isso aqui no style.css
//.product-list .actions button[disabled]{
    //opacity: 0.5;
  //  cursor: : default;
//}
//.product-list .actions button[disabled]:hover{opacity:0.5}