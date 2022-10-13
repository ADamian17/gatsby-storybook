import React from 'react';
import type { GatsbyBrowser } from 'gatsby';

const PageElementWrapper: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  console.log({ props });

  return <div {...props}> {true ? <p>...loading</p> : element}</div>;
};

export default PageElementWrapper;
