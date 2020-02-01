import React from 'react';
import { Link } from 'react-router-dom'

import './menu-item.styles.scss';

const MenuItem = ({item}) => {
    const {title, author, imageurl, id} = item;
    return (
    <Link className='menu-item' id={id} to={`/bookdetails/${id}`} >
        <div className='card'  >
        
            <img src={imageurl} className="image card-img-top" alt="..."/>
            
            <div className="card-body">
                <p className="card-text">{title}</p>
                <p className="card-text">{author}</p>
            </div>
        </div>
    </Link>
)}



export default MenuItem;

