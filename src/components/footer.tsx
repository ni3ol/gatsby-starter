/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Header, Grid, Button } from 'semantic-ui-react';
import { MediaContextProvider } from '../media';
import './footer.css';

export const Footer = () => {
  return (
    <div className="wrapper">
      <Container className="footerContainer">
        <MediaContextProvider>
          <Header inverted style={{ textAlign: 'center', fontSize: 40 }}>
            Have a question?
          </Header>
          <a href="/contact-us">
            <Button>Send a message</Button>
          </a>
        </MediaContextProvider>
        {/* <Media at="mobile">
          <Grid textAlign="center" columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Header className="footerHeader" as="h2">
                  Product
                </Header>
                <div className="footerColumn">
                  <a href="/#features">Features</a>
                  <a href="/pricing">Pricing</a>
                </div>
              </Grid.Column>
              <Grid.Column floated="left">
                <Header className="footerHeader" as="h2">
                  Connectors
                </Header>
                <div className="footerColumn">
                  <a
                    target="_blank"
                    href="https://github.com/queuemetrics/queuemetrics-connector-bull"
                  >
                    Bull connector
                  </a>
                  <a>BullMQ connector (Coming soon)</a>
                  <a>Sidekiq (Coming soon)</a>
                  <a>Celery (Coming soon)</a>
                </div>
              </Grid.Column>
              <Grid.Column floated="left">
                <Header className="footerHeader" as="h2">
                  Company
                </Header>
                <div className="footerColumn">
                  <a href="/about-us">About us</a>
                  <a href="/contact-us">Contact us</a>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Media> */}
      </Container>
    </div>
  );
};
