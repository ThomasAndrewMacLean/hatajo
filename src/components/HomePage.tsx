import React from 'react';
import { BackgroundImage, T } from '.';
import * as Styles from './HomePage.styles';

type PropsType = {};
const HomePage = ({}: PropsType) => {
  return (
    <Styles.HomePageWrapper>
      <BackgroundImage imageKey="image-1" fixed={true}>
        <div className="wrap">
          <div className="content">
            <h2>
              <T translationKey="home-1-title"></T>
            </h2>

            <T translationKey="home-1-text"></T>
          </div>
        </div>
      </BackgroundImage>

      <BackgroundImage imageKey="image-2" fixed={true}>
        <div className="wrap">
          <div className="content">
            <h2>
              <T translationKey="home-2-title"></T>
            </h2>

            <T translationKey="home-2-text"></T>
          </div>
        </div>
      </BackgroundImage>

      <BackgroundImage imageKey="image-3" fixed={true}>
        <div className="wrap">
          <div className="content">
            <h2>
              <T translationKey="home-3-title"></T>
            </h2>

            <T translationKey="home-3-text"></T>
          </div>
        </div>
      </BackgroundImage>
    </Styles.HomePageWrapper>
  );
};

export default HomePage;
