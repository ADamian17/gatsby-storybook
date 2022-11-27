import React from 'react';

import { HeadFC, Link } from 'gatsby';
import { Count, Counter } from '@components';

const IndexPage = () => {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
