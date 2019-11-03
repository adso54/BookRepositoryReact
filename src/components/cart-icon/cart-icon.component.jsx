import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-solid.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action'

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispachToProps = dispach =>({
    toggleCartHidden: () => dispach(toggleCartHidden())
})

export default connect(null, mapDispachToProps)(CartIcon);