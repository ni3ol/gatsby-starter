/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Table, Header, Button, Menu, List, Icon } from 'semantic-ui-react';
import Navigation from '../components/navigation';
import { Media, MediaContextProvider } from '../media';
import styles from './bootcamp.module.css';

import Hero from '../images/hero-with-pair.svg';

const Mentoring = () => {
  return (
    <>
      <MediaContextProvider>
        <div
          style={{
            position: 'relative',
            display: 'flex',
          }}
        >
          <img src={Hero} />
          <div
            style={{
              width: '100%',
              paddingTop: 20,
              position: 'absolute',
              paddingLeft: 168,
              paddingRight: 168,
              top: 0,
            }}
          >
            <Navigation />
          </div>
          <div className={styles.heroDesktop}>
            <Media greaterThanOrEqual="tablet">
              <Header
                inverted
                as="h1"
                style={{ fontSize: 55, fontWeight: 100 }}
              >
                Mentoring
              </Header>
              <List inverted className={styles.headerList}>
                <List.Item>
                  <List.Icon name="angle right" />
                  <List.Content>1:1 mentoring </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="angle right" />
                  <List.Content>
                    Lessons on coding and software development
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="angle right" />
                  <List.Content>Career advice</List.Content>
                </List.Item>
              </List>
            </Media>
            <Media at="mobile">
              <Header
                inverted
                as="h1"
                style={{ fontSize: 40, fontWeight: 100 }}
              >
                Novice Bootcamp
              </Header>
            </Media>
          </div>
        </div>
      </MediaContextProvider>
    </>
  );
};

export default Mentoring;
