import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Heading from '../components/Heading';

const IndexPage = () => {
  return (
    <main>
      <Heading text="Home Page" />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
