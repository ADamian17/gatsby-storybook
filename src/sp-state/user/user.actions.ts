import { SpActionFC } from '@types';
import userTypes from './user.types';

const login: SpActionFC = () => ({
  type: userTypes.LOGIN,
});

const logout: SpActionFC = () => ({
  type: userTypes.LOGOUT,
});

export default {
  login,
  logout,
};
