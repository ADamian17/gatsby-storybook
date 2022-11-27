import { SpActionFC } from '@types';
import counterTypes from './counter.types';

const increase: SpActionFC = () => ({
  type: counterTypes.INCREASE,
});

const decrease: SpActionFC = () => ({
  type: counterTypes.DECREASE,
});

export default {
  increase,
  decrease,
};
