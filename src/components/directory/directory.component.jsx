import React from 'react';

import MenuItem from '../menu-item/menu-item.component'
import { getAllBooks } from '../../firebase/firebase.utils';

import './directory.styles.scss';

 

class Directory extends React.Component {
    constructor(){
        super()
         
        this.state = {
                books: []
            }
            
    }
 
    componentDidMount() {
        getAllBooks()
        .then(allBooks => this.setState({ books: allBooks }))
      }

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='directory-menu'>
                        {this.state.books.map((item)=>(
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