/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Header, Button, List } from 'semantic-ui-react';
import Navigation from './navigation';
import { Media } from '../media';
import styles from '../pages/bootcamp.module.css';
import Hero from '../images/hero-with-girl.svg';

const BootcampHero = () => {
  return (
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
          <Header inverted as="h1" style={{ fontSize: 55, fontWeight: 100 }}>
            Learn to code and build websites
          </Header>
          <List inverted className={styles.headerList}>
            <List.Item>
              <List.Icon name="angle right" />
              <List.Content>
                Learn to code by receiving 1:1 mentorship, group lectures and
                comprehensive tutorials
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="angle right" />
              <List.Content>
                Join a community of other students learning to code
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="angle right" />
              <List.Content>
                Get exposure to a broader range of software development tools
              </List.Content>
            </List.Item>
          </List>
          <div>
            <a target="_blank" href="https://forms.gle/3gqkcmZ3B58sk8JBA">
              <Button>Sign up</Button>
            </a>
          </div>
        </Media>
        <Media at="mobile">
          <Header inverted as="h1" style={{ fontSize: 40, fontWeight: 100 }}>
            Novice Bootcamp
          </Header>
        </Media>
      </div>
    </div>
  );
};

export default BootcampHero;
