import React from 'react';
import { Image } from '.';
import { SEOType } from '../types';
import * as Styles from './Footer.styles';

type PropsType = { seo: SEOType[] };
const Footer = ({ seo }: PropsType) => {
  return (
    <Styles.FooterWrapper>
      <a
        className="social-link"
        target="_blank"
        href={seo.find((x) => x.id === 'facebook')!.text}
      >
        <Image imageKey="facebook"></Image>
      </a>
      <a
        className="social-link"
        target="_blank"
        href={seo.find((x) => x.id === 'instagram')!.text}
      >
        <Image imageKey="instagram"></Image>
      </a>
    </Styles.FooterWrapper>
  );
};

export default Footer;
