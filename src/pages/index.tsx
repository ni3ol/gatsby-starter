/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { init } from 'emailjs-com';
import Navigation from '../components/navigation';
import { Media, MediaContextProvider } from '../media';
import styles from './index.module.css';
import { SEO } from '../components/seo';
import Layout from '../components/layout';

const RootIndex = () => {
  return (
    <>
      <MediaContextProvider>
        {/* <Media> */}
        <Layout>Hi there</Layout>
        {/* </Media> */}
      </MediaContextProvider>
    </>
  );
};

export default RootIndex;
