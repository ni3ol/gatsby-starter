/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { Header, Button } from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';
import AOS from 'aos';
import Navigation from '../components/navigation';
import { Media, MediaContextProvider } from '../media';
import styles from './index.module.css';
import 'aos/dist/aos.css';

const RootIndex = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <>
      <MediaContextProvider>
        <div style={{ position: 'relative' }}>
          <div className={styles.area}>
            <ul className={styles.circles}>
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className={styles.container}>
            <div style={{ width: '80%', paddingTop: 20 }}>
              <Navigation />
            </div>
            <div className={styles.heroDesktop}>
              <Media greaterThanOrEqual="tablet">
                <Header
                  inverted
                  as="h1"
                  style={{ fontSize: 55, fontWeight: 100 }}
                >
                  Learn software development
                </Header>
                <HeaderSubHeader
                  style={{ fontSize: 20, color: 'white', paddingBottom: 18 }}
                >
                  We offer comprehensive learning to kickstart your career in
                  tech
                </HeaderSubHeader>
              </Media>
              <Media at="mobile">
                <Header
                  inverted
                  as="h1"
                  style={{ fontSize: 40, fontWeight: 100 }}
                >
                  A coding bootcamp for absolute beginners
                </Header>
                <HeaderSubHeader
                  style={{ fontSize: 16, color: 'white', paddingBottom: 18 }}
                >
                  Build a website from scratch and learn the fundamentals of
                  software development
                </HeaderSubHeader>
              </Media>
              <div>
                <Button
                  size="large"
                  style={{ backgroundColor: 'white', marginBottom: 20 }}
                  as={(props: any) => <a href="/bootcamp" {...props} />}
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MediaContextProvider>
    </>
  );
};

export default RootIndex;
