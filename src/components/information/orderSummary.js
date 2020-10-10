import React, { Component } from 'react';

import { UnderlinedTitle, InfoTitle } from './infoHelp';

class OrderSummary extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} order-summary`}>

                <UnderlinedTitle className='order-summary__title'/>

                <InfoTitle 
                className='order-summary__subtotal' 
                title='4 stickers' 
                value='5.96' 
                />
                <InfoTitle 
                className='order-summary__tax-shipping' 
                title='Taxes and Shipping' 
                value='0.00' 
                />
                <InfoTitle 
                className='order-summary__total' 
                title='Total' 
                value='8.02' 
                />
            </div>
        );
    }
}

export default OrderSummary;