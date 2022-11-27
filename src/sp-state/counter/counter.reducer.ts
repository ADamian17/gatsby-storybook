import { ActionType } from '@types';
import { INITIAL_STATE } from '../initialState';
import counterTypes from './counter.types';

const counterReducer = (state = INITIAL_STATE.counter, action: ActionType) => {
  switch (action.type) {
    case counterTypes.INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case counterTypes.DECREASE:
      if (state.count === 0) return state;
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
