<<<<<<< HEAD
import { UserActionTypes } from './user.types';
=======
import UserActionTypes from "./user.types";
>>>>>>> 878187c89589cdf75c6d01bb08a37964515bb777

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
<<<<<<< HEAD
=======

>>>>>>> 878187c89589cdf75c6d01bb08a37964515bb777
    default:
      return state;
  }
};

export default userReducer;
