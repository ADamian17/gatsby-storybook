import { createContext } from 'react';
import { SpCtxWrapperType } from '@types';

export const INITIAL_CTX: SpCtxWrapperType = {
  state: {},
  dispatch: function () {},
};

export const SpCtxWrapper = createContext(INITIAL_CTX);
