import { ActionType } from '@types';
import { INITIAL_STATE } from '../initialState';
import userTypes from './user.types';

const userReducer = (state = INITIAL_STATE.user, action: ActionType) => {
  switch (action.type) {
    case userTypes.LOGIN:
      return true;
    case userTypes.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default userReducer;
