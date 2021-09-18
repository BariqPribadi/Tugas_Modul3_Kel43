import React, { Component } from 'react';
import Product from './Product';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {

    componentDidMount(){
    alert('Selamat Datang di Toko Makanan, Selamat Berbelanja')
    }
    componentWillUnmount() {
    alert('Anda telah menambahkan produk ke keranjang')
    }
        render() {
            return (
                <React.Fragment>
                    <div class="d-flex align-items-center ">
                        <div className="container">
                            <div className="row" >
                                <ProductConsumer>
                                    {(value) => {
                                        return value.products.map(product => {
                                            return <Product key={product.id} product={product} />
                                        });
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
}
