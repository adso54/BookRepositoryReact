import React from 'react';

import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';

// import { getAllBooks } from '../../firebase/firebase.utils';

class Directory extends React.Component {
    constructor(){
        super()
        // const booksAll = getAllBooks();
        this.state = {
                books: 
                [
                    {
                        title: 'Solaris',
                        author: 'Stanisław Lem',
                        imageUrl: 'http://s.lubimyczytac.pl/upload/books/133000/133717/352x500.jpg',
                        id: '1'
                    },
                    {
                        title: 'Wiedźmin - Ostatnie życzenie',
                        author: 'Andrzej Sapkowski',
                        imageUrl: 'https://cloud-cdn.virtualo.pl/covers/medium/220464.jpg',
                        id: '2'
                    },
                    {
                        title: 'Why leaders eats last',
                        author: 'Simon Sinek',
                        imageUrl: 'https://cdn.bonito.pl/zdjecia/5/dd7dab61179-leaders-eat-last.jpg',
                        id:'3'
                    }
                ]
            }
            
    }

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='directory-menu'>
                        {
                            this.state.books.map((item)=>(
                                <MenuItem key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>

        )
    }
}


export default Directory;