import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Heading from '../components/Heading';
import Experiment from '../components/Experiment';

const IndexPage = () => {
  return (
    <main>
      <Heading text="Home Page" />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
