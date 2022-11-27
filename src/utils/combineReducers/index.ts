import { ActionType, SpStateType } from '@types';

const combineReducers = (reducers: { [key: string]: any }) => {
  return (state: SpStateType, action: ActionType) =>
    Object.keys(reducers).reduce(
      (acc, reducer) => ({
        ...acc,
        [reducer]: reducers[reducer](acc[reducer], action),
      }),
      state
    );
};

export default combineReducers;
