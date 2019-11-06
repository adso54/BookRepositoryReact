export const addItemToCart =  (cartItems, cartToAdd) =>{
    const existingCartItem = cartItems.find(cartItems => cartItems.id === cartToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartToAdd.id ? {...cartItem, quantity: cartItem.quantity +1} : cartItem   
        )
    }

    return [...cartItems, {...cartToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartToRemove.id);

    if(existingCartItem.quantity === 1 ){
        return cartItems.filter(cartItem => (
            cartItem.id !== cartToRemove.id
        ))
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem
        )
}