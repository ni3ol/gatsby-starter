/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button, Header, List, Segment, Tab, Table } from 'semantic-ui-react';
import { navigate } from 'gatsby';
import { MediaContextProvider } from '../media';
import { Tech } from '../components/tech';
import { Curriculum } from '../components/curriculum';
import BootcampMenu from '../components/bootcamp-menu';
import Section from '../components/section';
import BootcampHero from '../components/bootcamp-hero';
import BootcampStructure from '../components/bootcamp-structure';
import Learn from '../images/code-woman.svg';
import { Footer } from '../components/footer';

const Bootcamp = () => {
  return (
    <MediaContextProvider>
      <BootcampHero />
      <BootcampMenu />

      <Header style={{ textAlign: 'right', marginRight: 12 }}>
        Upcoming bootcamp: 20 June - 21 July 2021
      </Header>
      <a target="_blank" href="https://forms.gle/3gqkcmZ3B58sk8JBA">
        <Button
          style={{
            marginBottom: 50,
            backgroundColor: '#9da0e9',
            color: 'white',
            marginLeft: 'auto',
            display: 'flex',
            marginRight: 12,
          }}
          onClick={() => navigate(`/bootcamp#signup`)}
        >
          Sign up
        </Button>
      </a>

      <Section id="code" header=" Why learn to code?">
        <p style={{ width: '60%', margin: 'auto' }}>
          There are an abundance of well-paying jobs in the technology sector
          and with the age of digitalization this will only continue to be true.
          As software developers, UX/UI designers, product and project managers,
          you have the ability to work in any sector globally. From corporate
          companies to start ups, tech jobs offer vast opportunities, variety,
          and stimulating work.
        </p>
        <br />
        <p style={{ width: '60%', margin: 'auto' }}>
          Traditional Computer Science courses offered at universities do not
          teach comprehensive software development skills, and as a result many
          graduates enter the working world unprepared. Our goal is to ensure
          students get a taste for real software development.
        </p>
        <br />
        <p style={{ width: '60%', margin: 'auto' }}>
          For some inspiration, have a look at the
{' '}
          <a
            style={{ color: '#4e54c8' }}
            href="https://www.offerzen.com/reports/software-developer-south-africa"
          >
            2021 State of the Software Developer Nation Report
          </a>
{' '}
          which outlines all things tech, including salary distributions for
          developers in South Africa.
        </p>
        <br />
      </Section>

      <Section id="about" header="What is the Novice Bootcamp?">
        <div style={{ display: 'flex', width: '60%' }}>
          <div>
            <p>
              The Novice Bootcamp is a 6 week course designed to teach beginners
              the basics of coding and software development. No prior experience
              or specific skills are needed to join.
            </p>
            <br />
            <p>
              Each week consists of a 2 hour group lesson where core concepts
              and project building takes place. Each student will also setup a
              time for a weekly 1:1 session for tutoring and mentorship. In
              addition to this, 3 hours of "help sessions" are available for
              additional guidance.
            </p>
            <br />
            <p>
              At the end of the course each student will have developed and
              designed a personal website containing the projects from the
              course. In each project students will be able to use their
              creativity to customise their work.
            </p>
            <br />
            <p>
              This course not only teaches students to code, but also exposes
              them to an ecosystem of tools that software developers use on a
              daily basis.
            </p>
          </div>
          {/* <div data-aos="fade-right"> */}
          <img src={Learn} style={{ width: '40%', marginLeft: 100 }} />
          {/* </div> */}
        </div>
      </Section>

      <Section id="curriculum" header="Curriculum">
        <Curriculum />
      </Section>

      <Section id="structure" header="Bootcamp structure">
        <BootcampStructure />
      </Section>

      <Section id="pricing" header="Pricing">
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
        >
          <Table basic="very" collapsing>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <List>
                    <List.Content style={{ fontSize: 40, textAlign: 'center' }}>
                      R1800
                    </List.Content>
                    <List.Content style={{ fontSize: 16, textAlign: 'center' }}>
                      per student for the 6 week bootcamp
                    </List.Content>
                  </List>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <List size="large" relaxed="very" style={{ paddingTop: 40 }}>
                    <List.Item>
                      <List.Icon name="check circle" color="green" />
                      <List.Content>Weekly 1:1 session</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="check circle" color="green" />
                      <List.Content>Weekly 2 hour group session</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="check circle" color="green" />
                      <List.Content>
                        Optional 3 hours of help sessions
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="check circle" color="green" />
                      <List.Content>Continuous online assistance</List.Content>
                    </List.Item>
                  </List>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: 20,
                  }}
                >
                  <a target="_blank" href="https://forms.gle/3gqkcmZ3B58sk8JBA">
                    <Button color="purple">Sign up</Button>
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Section>

      <Section
        id="technologies"
        header="Technologies and tools you'll learn to use"
      >
        <Tech />
      </Section>

      <Footer />
    </MediaContextProvider>
  );
};

export default Bootcamp;
