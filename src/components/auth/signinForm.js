import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from '../details';

import history from '../../history';

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: 'Not registered? Create account here',
                onClick: () => history.push('/signup')
            },
            {
                _id: 1,
                title: 'Forgot Password?',
                onClick: () => console.log('forgot password')
            },
            {
                _id: 2,
                title: 'Forgot Account Email?',
                onClick: () => console.log('forgot email')
            }
        ];
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field
                    className='sign-in-form__email'
                    name='email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    component={FormInput} />

                <Field
                    className='sign-in-form__password'
                    name='password'
                    type='password'
                    title='Password'
                    placeholder='Password'
                    component={FormInput} />
                    
                
                <div className='sign-in-form__line'></div>
                

                <Field
                    onClick={() => history.push('/account')}
                    className='sign-in-form__login'
                    name='login'
                    type='submit'
                    title='Login'
                    component={FormButton} />

                <Details 
                className='sign-in-form__details' 
                title='Quicklinks'
                links={links}
                />
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;