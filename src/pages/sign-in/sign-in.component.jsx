import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignInForm extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return(
        <div className='container sign-in-form'>
            <form onSubmit={this.handleSubmit}>
            <FormInput 
                type='email'
                name = 'email'
                label = 'Email adress'
                required
                id = 'email'
                value={this.state.email}
                handleChange = {this.handleChange}
            />
            <FormInput 
                type='password'
                name = 'password'
                label = 'Password'
                required
                id = 'password'
                value={this.state.password}
                handleChange = {this.handleChange}
            />
            <div className='row'>
                <div className='col-6'>
                    <button type='submit' className='btn btn-success'>Sign in</button>
                </div>
                <div className='col-6'>
                    <button type='button' className='btn btn-primary' onClick={signInWithGoogle}>Sign in with Google</button>
                </div>
            </div>
            </form>
        </div>
        )
    }

}

export default SignInForm; 