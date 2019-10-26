import React from 'react';
import FormInput from '../../components/form-input/form-input.component'

import './registration.styles.scss';
import '../../components/form-input/form-input.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class RegistrationForm extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            displayName: ''
        }; 
    }

    handleChange = event => {
        const { value, name} = event.target;
        this.setState({ [name]: value});
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password, confirmPassword, displayName } = this.state;

        if(password !== confirmPassword){
            alert("Password do not match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
              email,
              password
            );
      
            await createUserProfileDocument(user, { displayName });
      
            this.setState({
              displayName: '',
              email: '',
              password: '',
              confirmPassword: ''
            });
          } catch (error) {
            console.error(error);
          }

    }

    render(){
        return(
            <div className='container registration-form'>
                <h1>Registration form</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name = 'displayName'
                        label = 'Display Name'
                        required
                        id = 'displayName'
                        value={this.state.displayName}
                        handleChange = {this.handleChange}
                    />
                    <FormInput 
                        type='email'
                        name = 'email'
                        label = 'Email Adress'
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
                    <FormInput 
                        type='password'
                        name = 'confirmPassword'
                        label = 'Confirm Password'
                        required
                        id = 'confirmPassword'
                        value={this.state.confirmPassword}
                        handleChange = {this.handleChange}
                    />
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        )};
}

export default RegistrationForm;