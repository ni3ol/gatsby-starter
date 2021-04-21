import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Menu, Sidebar, Icon, Button } from 'semantic-ui-react';
import styles from './navigation.module.css';
import { Media } from '../media';

export default () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <Media greaterThan="mobile">
        <nav role="navigation">
          <ul className={styles.navigation}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <li className={styles.navigationItem}>
                  <Link to="/">Code with Nicol</Link>
                </li>
              </div>
              <div style={{ display: 'flex' }}>
                <div>
                  <li className={styles.navigationItem}>
                    <Link to="/bootcamp">Upcoming Bootcamp</Link>
                  </li>
                </div>
                <div>
                  <li className={styles.navigationItem}>
                    <Link to="/mentoring">Mentoring</Link>
                  </li>
                </div>
                <div>
                  <li className={styles.navigationItem}>
                    <Link to="/about-us">About us</Link>
                  </li>
                </div>
                <div>
                  <li className={styles.navigationItem}>
                    <Link to="/contact-us/">Contact us</Link>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </nav>
      </Media>
      <Media at="mobile">
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          vertical
          visible={isVisible}
        >
          <Menu.Item>
            <div style={{ textAlign: 'end' }}>
              <Icon
                onClick={() => setVisible(!isVisible)}
                size="large"
                name="close"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 20,
                fontWeight: 'bold',
                borderBottom: '1px solid',
                color: 'white',
              }}
            >
              <Link to="/">Home</Link>
            </div>
            <div>
              <li className={styles.navigationItem}>
                <Link to="/curriculum">Curriculum</Link>
              </li>
            </div>
            <div>
              <li className={styles.navigationItem}>
                <Link to="/about-us">About us</Link>
              </li>
            </div>
            <div>
              <li className={styles.navigationItem}>
                <Link to="/contact-us/">Contact us</Link>
              </li>
            </div>
            <div>
              <Button>Sign up</Button>
            </div>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pushable>
          <Sidebar.Pusher
            dimmed={isVisible}
            onClick={isVisible ? () => setVisible(!isVisible) : undefined}
          >
            <Menu
              inverted
              secondary
              style={{
                padding: 5,
              }}
            >
              <Menu.Item>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item
                  onClick={() => {
                    setVisible(!isVisible);
                  }}
                >
                  <Icon name="bars" />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    </>
  );
};
