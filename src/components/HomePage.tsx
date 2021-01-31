import React, { useRef, useState } from 'react';
import { BackgroundImage, FadeIn, Image, T } from '.';
import * as Styles from './HomePage.styles';

type PropsType = {};
const HomePage = ({}: PropsType) => {
  const ref = useRef(null);
  const [hasLeft, setHasLeft] = useState(false);
  const [hasRight, setHasRight] = useState(true);

  const goLeft = () => {
    //@ts-ignore
    ref.current.scrollBy({
      top: 0,
      left:
        //@ts-ignore
        -ref.current.scrollWidth / 3,
      behavior: 'smooth',
    });
  };

  const goRight = () => {
    //@ts-ignore
    ref.current.scrollBy({
      top: 0,
      left:
        //@ts-ignore
        ref.current.scrollWidth / 3,
      behavior: 'smooth',
    });
  };

  return (
    <Styles.HomePageWrapper ref={ref}>
      {hasLeft && (
        <div className="left" onClick={goLeft}>
          <Image imageKey="left"></Image>
        </div>
      )}
      {hasRight && (
        <div className="right" onClick={goRight}>
          <Image imageKey="right"></Image>
        </div>
      )}
      <FadeIn
        runFunction={() => setHasLeft(false)}
        runFunctionWhenOutOfScreen={() => setHasLeft(true)}
      >
        <div></div>
      </FadeIn>
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

      <FadeIn
        runFunction={() => setHasRight(false)}
        runFunctionWhenOutOfScreen={() => setHasRight(true)}
      >
        <div></div>
      </FadeIn>
    </Styles.HomePageWrapper>
  );
};

export default HomePage;
