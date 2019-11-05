export const addItemToCart =  (cartItems, cartToAdd) =>{
    const existingCartItem = cartItems.find(cartItems => cartItems.id === cartToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartToAdd.id ? {...cartItem, quantity: cartItem.quantity +1} : cartItem   
        )
    }

    return [...cartItems, {...cartToAdd, quantity: 1}]
}