import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormButton } from '../formFields';

import history from '../../history';

class ReviewForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit} className={`${className} review-form`}>
                                
                <div className='review-form__line'></div>
                
                <Field
                    onClick={() => history.push('/signin')}
                    className='review-form__proceed'
                    name='proceed'
                    type='submit'
                    title='Proceed To Checkout'
                    component={FormButton} />

                
                <Field
                    onClick={() => history.push('/shop')}
                    className='review-form__back'
                    name='back'
                    type='button'
                    title='Back'
                    short={true}
                    component={FormButton} />

            </form>
        );
    }
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm;