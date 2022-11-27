import { useContext } from 'react';
import { SpCtxWrapper } from '@contexts';
import { ActionType } from '@types';

const useDispatch = (): React.Dispatch<ActionType> => {
  const { dispatch } = useContext(SpCtxWrapper);

  return dispatch;
};

export default useDispatch;
