import React from 'react';
import { BackgroundImage, FadeIn, T } from '.';
import * as Styles from './HomePage.styles';

type PropsType = {};
const HomePage = ({}: PropsType) => {
  return (
    <Styles.HomePageWrapper>
      <BackgroundImage imageKey="image-1" fixed={true}>
        <div className="wrap" id="home">
          <FadeIn
            waitTime={350}
            animationDuration={500}
            beginStyle={{ opacity: 0 }}
          >
            <div className="content">
              <h2>
                <T translationKey="home-1-title"></T>
              </h2>

              <T translationKey="home-1-text"></T>
            </div>
          </FadeIn>
        </div>
      </BackgroundImage>

      <BackgroundImage imageKey="image-2" fixed={true}>
        <div className="wrap" id="about">
          <FadeIn
            waitTime={350}
            animationDuration={500}
            beginStyle={{ opacity: 0 }}
          >
            <div className="content">
              <h2>
                <T translationKey="home-2-title"></T>
              </h2>

              <T translationKey="home-2-text"></T>
            </div>
          </FadeIn>
        </div>
      </BackgroundImage>

      <BackgroundImage imageKey="image-3" fixed={true}>
        <div className="wrap" id="contact">
          <FadeIn
            waitTime={350}
            animationDuration={500}
            beginStyle={{ opacity: 0 }}
          >
            <div className="content">
              <h2>
                <T translationKey="home-3-title"></T>
              </h2>

              <T translationKey="home-3-text"></T>
            </div>
          </FadeIn>
        </div>
      </BackgroundImage>
    </Styles.HomePageWrapper>
  );
};

export default HomePage;
