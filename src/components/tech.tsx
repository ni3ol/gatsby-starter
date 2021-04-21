import React from 'react';
import { chunk } from 'lodash';
import { Grid, Header, Responsive, Segment } from 'semantic-ui-react';
import JavaScript from '../images/javascript.svg';
import Css from '../images/css-3.svg';
import Figma from '../images/figma.svg';
import Html from '../images/html.svg';
import Netlify from '../images/netlify.svg';
import SemanticUi from '../images/semantic-ui.svg';
import Git from '../images/git.svg';
import ReactJs from '../images/react.svg';
import Meet from '../images/meet.svg';
import Slack from '../images/slack.svg';
import Gatsby from '../images/gatsby.svg';
import Trello from '../images/trello.svg';

const items = [
  {
    title: 'HTML',
    image: Html,
  },
  {
    title: 'CSS3',
    image: Css,
  },
  {
    title: 'React.js',
    image: ReactJs,
  },
  {
    title: 'Semantic UI',
    image: SemanticUi,
  },
  {
    title: 'JavaScript',
    image: JavaScript,
  },
  {
    title: 'Google Meet',
    image: Meet,
  },
  {
    title: 'Slack',
    image: Slack,
  },
  {
    title: 'Figma',
    image: Figma,
  },
  {
    title: 'Netlify',
    image: Netlify,
  },
  {
    title: 'Gatsby.js',
    image: Gatsby,
  },
  {
    title: 'Github',
    image: Git,
  },
  {
    title: 'Trello',
    image: Trello,
  },
];

export const Tech = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '60%',
        display: 'flex',
        margin: 'auto',
      }}
    >
      <Responsive minWidth={Responsive.onlyTablet.minWidth} />
      <div>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid columns={4} padded>
            {chunk(items, 4).map((chunks) => (
              <Grid.Row key={JSON.stringify(chunks.map(({ title }) => title))}>
                {chunks.map(({ title, image }) => {
                  return (
                    <Grid.Column
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                      key={title}
                    >
                      <Segment basic>
                        <Header textAlign="center">{title}</Header>
                        <img
                          src={image}
                          style={{ width: 55, height: 55, margin: 'auto' }}
                        />
                      </Segment>
                    </Grid.Column>
                  );
                })}
              </Grid.Row>
            ))}
          </Grid>
        </Responsive>
        {/* <Responsive {...Responsive.onlyMobile}>
          <Grid columns={2} centered padded>
            {chunk(items, 2).map((chunks) => (
              <Grid.Row key={JSON.stringify(chunks.map(({ title }) => title))}>
                {chunks.map(({ title, image: Icon }) => {
                  return (
                    <Grid.Column key={title}>
                      <Segment textAlign="center">
                        <Header textAlign="center">{title}</Header>
                        <Icon width="55" height="55" />
                      </Segment>
                    </Grid.Column>
                  );
                })}
              </Grid.Row>
            ))}
          </Grid>
        </Responsive> */}
      </div>
    </div>
  );
};
