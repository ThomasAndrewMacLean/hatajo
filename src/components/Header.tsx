import React from 'react';
import * as Styles from './Header.styles';
import { T } from '.';

import { stickyHeader } from '../constants/settings';

const Header = () => {
  return (
    <Styles.HeaderWrapper stickyHeader={stickyHeader}>
      <a href="#home">
        <h1>
          <T translationKey="title" />
        </h1>
      </a>

      <nav>
        <a href="#about">about</a>

        <a href="#contact">contact</a>
      </nav>
    </Styles.HeaderWrapper>
  );
};

export default Header;
