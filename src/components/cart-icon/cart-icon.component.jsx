import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-solid.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsQuantity } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemsCount}</span>
    </div>
)

const mapDispachToProps = dispach =>({
    toggleCartHidden: () => dispach(toggleCartHidden())
})


const mapStateToProps = createStructuredSelector(
    {
        itemsCount: selectCartItemsQuantity
    }
);

export default connect(mapStateToProps, mapDispachToProps)(CartIcon);