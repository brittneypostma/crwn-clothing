<<<<<<< HEAD
import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
=======
import SET_CURRENT_USER from "./user.types";

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
>>>>>>> 878187c89589cdf75c6d01bb08a37964515bb777
  payload: user
});
