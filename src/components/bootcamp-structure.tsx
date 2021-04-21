/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Table, List, Icon } from 'semantic-ui-react';
import Learn from '../images/learn.svg';

const BootcampStructure = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '60%',
        justifyContent: 'space-between',
      }}
    >
      <Table basic="very" collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <List>
                <List.Content style={{ fontSize: 24 }}>
                  <Icon color="purple" name="calendar alternate outline" />
                  Saturdays
                </List.Content>
                <List.Content style={{ fontSize: 16 }}>10am - 1pm</List.Content>
              </List>
            </Table.Cell>
            <Table.Cell />
            <Table.Cell>
              <List>
                <List.Item style={{ fontSize: 16 }}>
                  Group lesson (2 hours)
                </List.Item>
                <List.Item style={{ fontSize: 16 }}>
                  Help session (1 hour - optional)
                </List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <List>
                <List.Content style={{ fontSize: 24 }}>
                  <Icon color="purple" name="calendar alternate outline" />
                  Wednesdays
                </List.Content>
                <List.Content style={{ fontSize: 16 }}>5pm - 7pm</List.Content>
              </List>
            </Table.Cell>
            <Table.Cell />
            <Table.Cell>
              <List>
                <List.Item style={{ fontSize: 16 }}>
                  Help session (optional)
                </List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <List>
                <List.Content style={{ fontSize: 24 }}>
                  <Icon color="purple" name="calendar alternate outline" />
                  Weekly
                </List.Content>
                <List.Content style={{ fontSize: 16 }}>45 min</List.Content>
              </List>
            </Table.Cell>
            <Table.Cell />
            <Table.Cell>
              <List>
                <List.Item style={{ fontSize: 16 }}>
                  1:1 tutoring and mentoring session
                </List.Item>
                <List.Item style={{ fontSize: 16 }}>
                  Students can double up to do these sessions together if
                  preferred
                </List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <img src={Learn} style={{ width: '30%' }} />
    </div>
  );
};

export default BootcampStructure;
