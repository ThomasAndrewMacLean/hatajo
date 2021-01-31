import React from 'react';
import * as Styles from './Header.styles';
import { T } from '.';

import { PageNameType } from '../types';
import { stickyHeader } from '../constants/settings';

type PropsType = {};
const Header = () => {
  return (
    <Styles.HeaderWrapper stickyHeader={stickyHeader}>
      <h1>
        <T translationKey="title" />
      </h1>
    </Styles.HeaderWrapper>
  );
};

export default Header;
