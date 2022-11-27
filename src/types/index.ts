export type HeadingType = {
  text: string;
  variant?: 'blue' | 'yellow' | 'red';
  handleClick?: (e: React.MouseEvent) => void;
};

export type ActionType = {
  type: string;
  payload?: any;
};

export type SpStateType = {
  [key: string]: any;
};

export type SpCtxWrapperType = {
  state: SpStateType;
  dispatch: React.Dispatch<ActionType>;
};

export type SpActionFC = <T = any>(payload?: T) => ActionType;
