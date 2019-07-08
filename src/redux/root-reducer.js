<<<<<<< HEAD
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
=======
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
>>>>>>> 878187c89589cdf75c6d01bb08a37964515bb777

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
