import React from 'react'

import './menu-item.styles.scss'

const MenuItem = ({title, author, imageUrl, id}) => (
    <div className='menu-item card ' >
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{author}</p>
        </div>
      
    </div>  
)

export default MenuItem;

