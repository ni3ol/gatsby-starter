/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Header } from 'semantic-ui-react';

const Section = ({ id, header, children, color = false }) => {
  return (
    <div
      id={id}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: 75,
        paddingTop: 75,
        backgroundColor: color && '#f3f3ff',
      }}
    >
      <Header
        style={{
          fontSize: 35,
          textAlign: 'center',
          marginBottom: 50,
          color: '#344352',
        }}
        as="h2"
      >
        {header}
      </Header>
      {children}
    </div>
  );
};

export default Section;
