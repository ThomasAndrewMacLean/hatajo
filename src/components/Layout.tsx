import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Layout.styles';
import { Header, Footer, SEO } from '.';
import { SEOType } from '../types';
import { hasHeader, hasFooter, stickyHeader } from '../constants/settings';

type LayoutProps = {
  children: ReactNode;
  seo: SEOType[];
};
const Layout = ({ children, seo }: LayoutProps) => {
  return (
    <Styled.Wrap>
      <SEO seo={seo}></SEO>
      {hasHeader && <Header></Header>}
      {hasHeader && stickyHeader && <Styled.Pusher />}
      {children}
      {hasFooter && <Footer seo={seo} />}
    </Styled.Wrap>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  page: PropTypes.string.isRequired,
};

export default Layout;
