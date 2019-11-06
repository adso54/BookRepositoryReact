import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsQuantity, selectCartItems } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


import './checkout.styles.scss';

const CheckoutPage = ({quantity, cartItems}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Image</span>
            </div>
            <div className='checkout-block'>
                <span>Title</span>
            </div>
            <div className='checkout-block'>
                <span>Author</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Remove</span>
            </div>
        </div>
        <div>
            {cartItems.map( cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}
        </div>
        <div className='total'>
            <span>Quantity of all books: {quantity}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    quantity: selectCartItemsQuantity,
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CheckoutPage); 