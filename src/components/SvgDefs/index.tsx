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
  | 'loading-circle'
  | 'icon-arrow-down'
  | 'icon-arrow-left'
  | 'icon-arrow-up'
  | 'icon-check'
  | 'icon-comment'
  | 'icon-edit-feedback'
  | 'mob-icon-close'
  | 'mob-icon-open'
  | "chevron-down"
  | "chevron-up";

type SvgDefsType = {
  className?: string;
  fileName: "icons-def" | "defs"
  svg: SvgType;
  [key: string]: any;
};

const SvgDefs = ({ svg, className, fileName, ...rest }: SvgDefsType) => {
  return (
    <svg className={className} {...rest}>
      <use xlinkHref={`/icons/${fileName}.svg#${svg}`}></use>
    </svg>
  );
};

export default SvgDefs;
