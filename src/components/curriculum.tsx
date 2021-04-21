import React from 'react';
import { List, Header, Table, Segment } from 'semantic-ui-react';

export const Curriculum = () => {
  return (
    <Segment
      color="purple"
      style={{
        boxShadow:
          'rgba(25, 28, 31, 0.08) 0px 7px 16px, rgba(25, 28, 31, 0.04) 0px 4px 8px, rgba(25, 28, 31, 0.04) 0px -1px 0px',
        borderRadius: 15,
        padding: 60,
        display: 'flex',
        justifyContent: 'space-between',
      }}

      //       #4e54c8;
      // @pink           : #9da0e9;
    >
      <Table basic="very" collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header size="huge" color="pink" as="h4">
                Week 0
              </Header>
            </Table.Cell>
            <Table.Cell />
            <Table.Cell>
              <Header
                style={{ fontSize: 24 }}
                size="medium"
                color="purple"
                as="h4"
              >
                Course introduction
              </Header>
              <List bulleted>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Environment setup
                </List.Item>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Expectations overview
                </List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header size="huge" color="pink" as="h4">
                Week 1
              </Header>
            </Table.Cell>
            <Table.Cell />
            <Table.Cell>
              <Header
                style={{ fontSize: 24 }}
                size="medium"
                color="purple"
                as="h4"
              >
                Web basics
              </Header>
              <List bulleted>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  HTML introduction
                </List.Item>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  CSS introduction
                </List.Item>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Project: Build a home page for your personal website
                </List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header size="huge" color="pink" as="h4">
                Week 2
              </Header>
            </Table.Cell>
            <Table.Cell />
            <Table.Cell>
              <Header
                style={{ fontSize: 24 }}
                size="medium"
                color="purple"
                as="h4"
              >
                JS libraries and design
              </Header>
              <List bulleted>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  React.js introduction
                </List.Item>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Semantic UI React introduction
                </List.Item>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Figma introduction
                </List.Item>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Project: Improve on your homepage using React and Semantic UI
                </List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header size="huge" color="pink" as="h4">
                Week 3
              </Header>
            </Table.Cell>
            <Table.Cell />
            <Table.Cell>
              <Header
                style={{ fontSize: 24 }}
                size="medium"
                color="purple"
                as="h4"
              >
                Programming foundations |
              </Header>
              <List bulleted>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Javascript introduction
                </List.Item>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Data types, variables, functions, basic operators
                </List.Item>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Project: Build a calculator
                </List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header size="huge" color="pink" as="h4">
                Week 4
              </Header>
            </Table.Cell>
            <Table.Cell />
            <Table.Cell>
              <Header
                style={{ fontSize: 24 }}
                size="medium"
                color="purple"
                as="h4"
              >
                Programming foundations ||
              </Header>
              <List bulleted>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  If/Else statements, equality operators
                </List.Item>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Project: Build Rock Paper Scissors game
                </List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header size="huge" color="pink" as="h4">
                Week 5
              </Header>
            </Table.Cell>
            <Table.Cell />
            <Table.Cell>
              <Header
                style={{ fontSize: 24 }}
                size="medium"
                color="purple"
                as="h4"
              >
                Programming foundations |||
              </Header>
              <List bulleted>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Arrays, objects
                </List.Item>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Looping
                </List.Item>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Project: Build a TODO list
                </List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header size="huge" color="pink" as="h4">
                Week 6
              </Header>
            </Table.Cell>
            <Table.Cell />
            <Table.Cell>
              <Header
                style={{ fontSize: 24 }}
                size="medium"
                color="purple"
                as="h4"
              >
                Final project
              </Header>
              <List bulleted>
                <List.Item style={{ fontSize: 18, color: '#344352' }}>
                  Project: Build a budget app
                </List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
  );
};
