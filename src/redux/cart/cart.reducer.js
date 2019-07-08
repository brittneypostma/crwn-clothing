<<<<<<< HEAD
import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';
=======
import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";
>>>>>>> 878187c89589cdf75c6d01bb08a37964515bb777

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
