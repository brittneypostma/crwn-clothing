export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
<<<<<<< HEAD

=======
>>>>>>> 878187c89589cdf75c6d01bb08a37964515bb777
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
