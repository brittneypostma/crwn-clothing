<<<<<<< HEAD
import { createSelector } from 'reselect';
=======
import { createSelector } from "reselect";
>>>>>>> 878187c89589cdf75c6d01bb08a37964515bb777

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
<<<<<<< HEAD
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
=======
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
>>>>>>> 878187c89589cdf75c6d01bb08a37964515bb777
      0
    )
);
