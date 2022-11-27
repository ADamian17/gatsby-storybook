import React from 'react';
import { GatsbyBrowser, Link } from 'gatsby';
import { SpMainCtxWrapper } from '@containers';
import { MainNavbar } from '@layouts';

const PageElementWrapper: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return (
    <SpMainCtxWrapper {...props}>
      <MainNavbar />

      {element}
    </SpMainCtxWrapper>
  )
};

export default PageElementWrapper;
