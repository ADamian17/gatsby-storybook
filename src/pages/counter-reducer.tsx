import React from 'react';

import type { HeadFC } from 'gatsby';
import { Count, Counter } from '@components';

const CounterReducerPage = () => {
  return (
    <main>
      <h1>Counter Reducer</h1>

      <Count />
      <Counter />
    </main>
  );
};

export default CounterReducerPage;

export const Head: HeadFC = () => <title>Counter Reducer</title>;
