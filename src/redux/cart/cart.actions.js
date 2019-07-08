<<<<<<< HEAD
import CartActionTypes from './cart.types';
=======
import CartActionTypes from "./cart.types";
>>>>>>> 878187c89589cdf75c6d01bb08a37964515bb777

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
