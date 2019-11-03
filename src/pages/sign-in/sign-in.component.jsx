import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import  CustomButton  from '../../components/custom-button/custom-button.component';

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
                
                id = 'email'
                value={this.state.email}
                handleChange = {this.handleChange}
            />
            <FormInput 
                type='password'
                name = 'password'
                label = 'Password'
                
                id = 'password'
                value={this.state.password}
                handleChange = {this.handleChange}
            />
            <div className='row'>
                <div className='col-5'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                </div>
                <div className='col-7'>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </div>
            </form>

            
            


        </div>
        )
    }

}

export default SignInForm; 