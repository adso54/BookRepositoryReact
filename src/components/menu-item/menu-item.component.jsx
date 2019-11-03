import React from 'react';
import { connect } from 'react-redux';

import './menu-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.action';

const MenuItem = ({item, addItem}) => {
    const {title, author, imageUrl, id} = item;
    return (
    <div className='menu-item card ' id={id} >
        
        <img src={imageUrl} className="image" alt="..."/>
        
        <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{author}</p>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted> +Add </CustomButton>
    </div>  
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(MenuItem);

