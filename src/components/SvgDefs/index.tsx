import React from 'react';

/*LINK https://www.gatsbyjs.com/docs/how-to/images-and-media/importing-assets-into-files/ */

type SvgType =
  | 'arrow-left'
  | 'arrow-right'
  | 'capterra'
  | 'check-mark'
  | 'check-mark-green'
  | 'chevron-down'
  | 'hi-trust-certified-icon'
  | 'hi-trust-certified'
  | 'hipaa'
  | 'pci-compliance'
  | 'sp-logo-blue'
  | 'sp-logo-butterfly'
  | 'sp-logo-white'
  | 'loading-circle';

type SvgDefsType = {
  svg: SvgType;
  className?: string;
  [key: string]: any;
};

const SvgDefs = ({ svg, className, ...rest }: SvgDefsType) => {
  return (
    <svg className={className} {...rest}>
      <use xlinkHref={`/icons/defs.svg#${svg}`}></use>
    </svg>
  );
};

export default SvgDefs;
