import React from 'react';

import './new-book.styles.scss';
import FormInput from  '../../components/form-input/form-input.component';

class NewBook extends React.Component {

    constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            imageurl: ''
        };
        
    }

    handleChange = event =>{
        const { value, name} = event.target;
        this.setState({ [name]: value});
    }

    render(){
    return(
    <div className='container new-book'>
        <form >
                <FormInput 
                    type='text'
                    name = 'title'
                    label = 'Title'
                    required
                    id = 'title'
                    value={this.state.title}
                    handleChange = {this.handleChange}
                />
                <FormInput 
                    type='text'
                    name = 'author'
                    label = 'Author'
                    required
                    id = 'author'
                    value={this.state.author}
                    handleChange = {this.handleChange}
                />
                <FormInput 
                    type='text'
                    name = 'imageurl'
                    label = 'Image URL'
                    required
                    id = 'imageurl'
                    value={this.state.imageurl}
                    handleChange = {this.handleChange}
                />
            <button className='btn btn-success'>Submit</button>
        </form>
    </div>
    )};
    }


export default NewBook;