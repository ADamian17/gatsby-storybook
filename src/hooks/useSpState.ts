import { useContext } from 'react';

import { SpCtxWrapper } from '../contexts';
import { SpStateType } from '@types';

const useSpState = (callback: (state: SpStateType) => SpStateType) => {
  const { state } = useContext(SpCtxWrapper);

  return callback(state);
};

export default useSpState;
