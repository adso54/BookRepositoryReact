import React from 'react';

import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';



// const Directory = () => (
//     <div>Directory</div>
// );

class Directory extends React.Component {
    constructor(){
        super()
        this.state = {
                books: [
                    {
                        title: 'Solaris',
                        author: 'Stanisław Lem',
                        imageUrl: 'https://cf1-taniaksiazka.statiki.pl/images/popups/247/56114100153KS.jpg',
                        id: '1'
                    },
                    {
                        title: 'Wiedźmin - Ostatnie życzenie',
                        author: 'Andrzej Sapkowski',
                        imageUrl: 'https://cloud-cdn.virtualo.pl/covers/medium/220464.jpg',
                        id: '2'
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
                            this.state.books.map(({id, ...props})=>(
                            <div className='col-4'> 
                                <MenuItem key={id} {...props}/>
                            </div>
                           
                            ))
                        }
                    </div>
                </div>
            </div>

        )
    }
}


export default Directory;