import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from '../details';

import history from '../../history';

class SignUpForm extends Component {
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
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field
                    className='sign-up-form__name'
                    name='name'
                    type='name'
                    title='Name'
                    placeholder='Name'
                    component={FormInput} />

                <Field
                    className='sign-up-form__email'
                    name='email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    component={FormInput} />

                <Field
                    className='sign-up-form__password'
                    name='password'
                    type='password'
                    title='Password'
                    placeholder='Password'
                    component={FormInput} />
                    
                <Field
                    className='sign-up-form__confirm-password'
                    name='confirm'
                    type='password'
                    title='Confirm Password'
                    placeholder='Confirm Password'
                    component={FormInput} />
                
                <div className='sign-up-form__line'></div>
                

                <Field
                    onClick={() => console.log('tryna submmit')}
                    className='sign-up-form__login'
                    name='login'
                    type='submit'
                    title='Login'
                    component={FormButton} />

                
                <Field
                    onClick={() => console.log('tryna go back')}
                    className='sign-up-form__back'
                    name='back'
                    type='button'
                    title='Back'
                    short={true}
                    component={FormButton} />

                <Details 
                className='sign-up-form__details' 
                title='Quicklinks'
                links={links}
                />
            </form>
        );
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;