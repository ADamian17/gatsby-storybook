import React from 'react';
import type { RenderBodyArgs } from 'gatsby';

const handleOnRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  setHeadComponents([
    <link
      key="lobster"
      rel="preload"
      href="/fonts/Graphik-Bold-Web.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ]);
};

export default handleOnRenderBody;
