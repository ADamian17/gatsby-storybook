import React from 'react';

import type { HeadFC } from 'gatsby';
import { Slider } from '@components';
import { MainGridLayout } from '@layouts';

const IndexPage = () => {
  return (
    <MainGridLayout>
    </MainGridLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
