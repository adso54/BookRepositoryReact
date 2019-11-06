import React from 'react';
import { connect } from 'react-redux';

import { removeItem, removeOneItem, addItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItem, removeOneItem, addOneItem}) => 
{
    const {imageUrl, title, author, quantity} = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item"/>
        </div>
        <span className='name'>{title}</span>
        <span className='name'>{author}</span>
        <span className='quantity'>
        <div className='arrow' onClick={() => removeOneItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addOneItem(cartItem)}>&#10095;</div>
        </span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItem(item)),
    removeOneItem: item => dispatch(removeOneItem(item)),
    addOneItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);