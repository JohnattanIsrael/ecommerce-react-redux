import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import OrderSummary from './orderSummary';

import { UnderlinedTitle } from './infoHelp';

import history from '../../history';

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field
                    className='payment-form__name'
                    name='name'
                    type='name'
                    title='Name on Credit Card'
                    placeholder='Name'
                    component={FormInput} />


                <Field
                    className='payment-form__card'
                    name='card'
                    type='card'
                    title='Credit Cart Number'
                    placeholder='____ -____-____-____'
                    component={FormInput} />

                <Field
                    className='payment-form__expiration'
                    name='expiration'
                    type='expiration'
                    title='Expiration Date'
                    placeholder='Expiration Date'
                    component={FormInput} />

                <Field
                    className='payment-form__ccv'
                    name='ccv'
                    type='ccv'
                    title='CCV'
                    placeholder='CCV'
                    component={FormInput} />

                <div className='payment-form__line'></div>

                <Field
                    onClick={() => history.push('/information/payment')}
                    className='payment-form__pay-complete'
                    name='pay-complete'
                    type='submit'
                    title='Pay and Complete'
                    component={FormButton} />


                <Field
                    onClick={() => history.push('/signin')}
                    className='payment-form__back'
                    name='back'
                    type='button'
                    title='Back'
                    short={true}
                    component={FormButton} />

                <OrderSummary
                    className='payment-form__order-summary'
                />

                <div className='payment-form__shipping-info shipping-info'>
                    <UnderlinedTitle
                    className='shipping-info__title'
                    title='Shipping To'
                    />
                    <div className='shipping-info__name small-text'>
                        Johna Angeles
                    </div>
                    <div className='shipping-info__address small-text'>
                        An address
                    </div>
                </div>
            </form>
        );
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm;