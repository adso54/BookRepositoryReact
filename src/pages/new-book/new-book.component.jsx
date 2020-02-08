import React from 'react';

import './new-book.styles.scss';
import FormInput from  '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { createBookDocument } from '../../firebase/firebase.utils';
import StarRating from '../../components/star-rating/star-rating.component';


class NewBook extends React.Component {

    constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            imageurl: '',
            language: '',
            rating: 0,
            description: '',
            id:'',
            image: null,
            progress: 0,
            url: ''
        };
        
    }

    handleChange = event =>{
        
        const { value, name, type} = event.target;
        if(type === 'file' && event.target.files[0]) {
            const image = event.target.files[0];
            this.setState({image: image})
        } else {
            this.setState({ [name]: value})
        }    

    }

    handleRatingChange = async ratingValue => {
        this.setState({rating: ratingValue})
        console.log(ratingValue);
    }


    handleSubmit = async event => {

        event.preventDefault();

        const  book  = {...this.state};

        try {
                
            await createBookDocument(book);
      
            this.setState({
                title: '',
                author: '',
                imageurl: '',
                language: '',
                rating: 0,
                description: '',
                id: '',
                image: null,
                progress: 0
            });
          } catch (error) {
            console.error(error);
          }
    }

    render(){
    return(
    <div className='container new-book'>
        <form onSubmit={this.handleSubmit}>
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
                name = 'language'
                label = 'Language'
                required
                id = 'langueage'
                value={this.state.language}
                handleChange = {this.handleChange}
            />
             <FormInput 
                type='file'
                name = 'image'
                label = ''
                id = 'image'
                handleChange = {this.handleChange}
            />
            <StarRating rating ={this.state.rating} handleRatingChange={this.handleRatingChange}/>
            <CustomButton type='submit'> Create </CustomButton>
        </form>
    </div>
    )};
    }


export default NewBook;