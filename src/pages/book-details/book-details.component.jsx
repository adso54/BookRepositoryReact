import React from 'react';
import { getBookById } from '../../firebase/firebase.utils';
import BouncingLoader from '../../components/loaders/bouncing-loader/bouncing-loader.component';
// import FormInput from '../../components/form-input/form-input.component';
import './book-details.styles.scss';
import StarRating from '../../components/star-rating/star-rating.component';

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
                {!author ? 
                    <BouncingLoader/>
                : 
                    <div className='book-details'>
                        <div>
                            <img src={imageurl} alt='Img'/>
                        </div>
                        <div>
                            <h1>Title: {title}</h1>
                            <h2>Author: {author}</h2>
                            <StarRating />
                        </div>
                        
                        
                    </div>

                }

            </div>
        )
    }
}


export default BookDetails;