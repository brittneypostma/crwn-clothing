<<<<<<< HEAD
import { createSelector } from 'reselect';
=======
import { createSelector } from "reselect";
>>>>>>> 878187c89589cdf75c6d01bb08a37964515bb777

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
