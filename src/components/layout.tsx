import React from 'react';
import { Container } from 'semantic-ui-react';
import './base.css';
import Navigation from './navigation';

const Layout = ({ children }: { children: any }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default Layout;
