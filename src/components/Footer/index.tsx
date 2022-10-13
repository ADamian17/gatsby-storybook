import React from 'react';

import * as styles from './Footer.module.scss';

type FooterType = {
  link?: string;
};

const Footer: React.FC<FooterType> = ({ link }) => {
  return <div>Footer {link} </div>;
};

export default Footer;
