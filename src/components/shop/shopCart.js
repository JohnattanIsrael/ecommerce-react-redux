import React, { Component } from 'react';

import CartProduct from './cartProduct';

function CartButton({ className, icon }) {
    return (
        <div className={`cart-button ${className}`}>
            <i className={icon}></i>
        </div>
    )
}

function CartContent({ className, products }) {
    let count = products.length;
    let productJSX = products.map(product => <CartProduct key={product}>{product}</CartProduct>);
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>
                {productJSX}
            </div>
            <CartFooter
                className='cart-content__footer'
                products={products}
            />
        </div>
    )
}

function CartFooter({ className, products }) {
    const price = 7.96;
    return (
        <div className={`${className} cart-footer`}>
            <a className='cart-footer__checkout'>
                Checkout
            </a>
            <div className='cart-footer__subtotal'>
                Subtotal
            </div>
            <div className='cart-footer__price'>
                ${price}
            </div>
        </div>
    )
}

export default class ShopCart extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className}`}>
                <CartButton
                    className='shop-cart__toggle'
                    icon='fa fa-times'
                />
                <CartContent
                    className='shop-cart__content'
                    products={[4, 444, 443, 445, 33, 5443, 233, 14, 1444, 1443, 1445, 133, 154, 43, 1233]}
                />

            </div>
        );
    }
}
