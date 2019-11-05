import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item: {title, author, imageUrl, id, quantity}}) => (
    <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='title'>{title}</span>
      <span className='quantity'>
        {quantity} times
      </span>
    </div>
  </div>
)

export default CartItem;