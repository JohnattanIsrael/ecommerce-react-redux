import React, { Component } from 'react';

import Quantity from '../quantity';
import GreenPriceTag from '../greenPriceTag';

export default class CartProduct extends Component {
    render() {
        console.log(this.props);
        const { className, product, quantity } = this.props;
        const { title, price } = product;
        // const { className, title, quantity, price} = this.props;
        return (
            <div className={`${className} cart-product`}>
                <img className='cart-product__image' src='http://via.placeholder.com/130x130'/>
                <div className='cart-product__title'>{title}</div>
                <Quantity className='cart-product__quantity' quantity={quantity} />
                <a className='cart-product__remove'>
                    Remove
                </a>
                <GreenPriceTag  className='cart-product__price' title={price}/>
                
            </div>
        );
    }
}
