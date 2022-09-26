import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Heading from '../components/Heading';

const IndexPage = () => {
  return (
    <main>
      <Heading text="Never let lorem stop you" />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Never let lorem stop you</title>;
