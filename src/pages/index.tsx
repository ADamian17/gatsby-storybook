import React from 'react';

import type { HeadFC } from 'gatsby';
import { Slider } from '@components';
import { MainGridLayout } from '@layouts';

const sliderItems = [
  {
    image: {
      src: 'https://images.unsplash.com/photo-1665331626213-8eb051094b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80',
      alt: 'image one',
    },
  },
  {
    image: {
      src: 'https://images.unsplash.com/photo-1655143655419-15c8d142c731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2129&q=80',
      alt: 'image two',
    },
  },
  {
    image: {
      src: 'https://images.unsplash.com/photo-1654970209837-c5f100294796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80',
      alt: 'image three',
    },
  },
];

const IndexPage = () => {
  return (
    <div>Home</div>
    // <MainGridLayout>
    // </MainGridLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
