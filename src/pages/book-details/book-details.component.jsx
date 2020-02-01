import React from 'react';
import { getBookById } from '../../firebase/firebase.utils'

import './book-details.styles.scss';

class BookDetails extends React.Component {
    constructor(){
        super();
        
        this.state = { 
            book: {
                author: '',
                imageurl: '',
                title: ''
        }  
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        getBookById(id)
        .then(retBook => this.setState({ book: retBook}))
    
    }

    render(){
           const {author, title, imageurl} = this.state.book;
        return(
            <div>
                <h1>Title: {title}</h1>
                <h2>Author: {author}</h2>
                <img src={imageurl} alt='Img'/>
            </div>
        )
    }
}


export default BookDetails;