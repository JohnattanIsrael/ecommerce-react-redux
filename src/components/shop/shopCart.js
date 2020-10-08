import React, { Component } from 'react';

function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon}></i>
        </div>
    )
}

function CartContent({className}) {
    return (
        <div className={`${className} cart-content`}>

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
                />
                
            </div>
        );
    }
}
