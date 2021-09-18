import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ProductConsumer} from '../context';

export default class Product extends Component {

    render() {
        
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <div class="col-sm-6 pb-2">
                <div>
                    <ProductConsumer>
                        {value => (
                            <div class="card">
                            <img src={img} alt="" className="card-img-top" class="span3 "/>
                            </div>
                        )}
                    </ProductConsumer>
                    <div>
                        <p class="font-weight-light mb-1">{title}</p>
                        <h6>
                            <span>Rp. </span>
                            {price} <ProductConsumer>
                        {value => (
                            <button 
                                type="button" class="btn btn-info w-100 mt-2"                             
                                disabled={inCart?true:false}
                                onClick={() => {
                                    value.openModal(id);
                                    value.addToCart(id);
                                }}
                            >
                            {inCart ? (
                                <p class="m-1">
                                Didalam Keranjang
                                </p>
                            ):(
                                <p class="m-1">
                                Beli
                                </p>
                            )}
                            </button>
                        )}
                    </ProductConsumer>
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
    
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};