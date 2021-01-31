import React, { useEffect } from 'react';
import '../styles/style.css';
import PropTypes from 'prop-types';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    const setResizeVariables = () => {
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setResizeVariables);
    setResizeVariables();
  }, []);
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
export default MyApp;
