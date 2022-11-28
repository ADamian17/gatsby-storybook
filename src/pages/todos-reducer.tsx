import React from 'react';

import type { HeadFC } from 'gatsby';
import { Count, Counter } from '@components';
import { TodosContainer } from '@containers';

const TodosReducerPage = () => {
  return (
    <main>
      <h1>Todos Reducer Page</h1>

      <TodosContainer />
    </main>
  );
};

export default TodosReducerPage;

export const Head: HeadFC = () => <title>Todos Reducer Page</title>;