import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({item}) => {
    const {title, author, imageUrl, id} = item;
    return (
    <div className='menu-item card ' id={id} >
        
        <img src={imageUrl} className="image" alt="..."/>
        
        <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{author}</p>
        </div>
    </div>  
)}



export default MenuItem;

