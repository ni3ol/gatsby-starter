import React, { useState } from 'react';
import {
  Grid,
  Header,
  Segment,
  Message,
  Container,
  Button,
  Form,
  TextArea,
  Input,
} from 'semantic-ui-react';
import { send } from 'emailjs-com';
import Layout from '../components/layout';
import { Media, MediaContextProvider } from '../media';
import { getEmailError, getInputError } from '../helpers/form-validation';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [contact, setContact] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const submit = async () => {
    setHasBeenSubmitted(true);

    const canSubmit = name && email && message;

    if (canSubmit) {
      try {
        setIsLoading(true);
        await send('service_cygh46b', 'template_jsolrkh', {
          name,
          email,
          contact,
          message,
        });
        setIsLoading(false);
        setShowSuccess(true);
      } catch (e) {
        setIsLoading(false);
        setHasError(true);
      }
    }
  };
  return (
    <MediaContextProvider>
      <Layout>
        <Media greaterThanOrEqual="tablet">
          <Container style={{ marginTop: 80 }}>
            <Grid columns={2} centered>
              <Grid.Column
                width={6}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <Header
                  as="h1"
                  style={{
                    fontSize: 60,
                    fontWeight: 100,
                  }}
                >
                  Contact details
                </Header>
                <p>Email:</p>
                <p>Cell:</p>
              </Grid.Column>
              <Grid.Column>
                {showSuccess ? (
                  <>
                    <Message
                      header="Success!"
                      content="Your message was sent successfully. We will get back to you shortly"
                    />
                    <a href="/">
                      <Button primary>Back home</Button>
                    </a>
                  </>
                ) : (
                  <Segment style={{ padding: 30 }} className="contact">
                    <Header as="h3" textAlign="center" style={{ fontSize: 24 }}>
                      Send an enquiry
                    </Header>
                    {hasError && (
                      <Message
                        error
                        header="An error occurred"
                        content="Something went wrong. Please try to submit your request again"
                      />
                    )}

                    <Form onSubmit={submit} loading={isLoading}>
                      <Form.Field
                        error={getInputError({ hasBeenSubmitted, value: name })}
                        style={{ paddingBottom: 12 }}
                      >
                        <label>Name</label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
                          value={name}
                          style={{ borderColor: '#eaeaea' }}
                        />
                      </Form.Field>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ width: '48%' }}>
                          <Form.Field
                            style={{ paddingBottom: 24 }}
                            control={Input}
                            value={email}
                            label="Email"
                            error={getEmailError({ hasBeenSubmitted, email })}
                          >
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="jason@gmail.com"
                              style={{ borderColor: '#eaeaea' }}
                            />
                          </Form.Field>
                        </div>
                        <div style={{ width: '48%' }}>
                          <Form.Field
                            control={Input}
                            value={contact}
                            label="Contact number"
                          >
                            <input
                              onChange={(e) => setContact(e.target.value)}
                              placeholder="0831234567"
                              style={{ borderColor: '#eaeaea' }}
                            />
                          </Form.Field>
                        </div>
                      </div>
                      <Form.Field
                        error={getInputError({
                          hasBeenSubmitted,
                          value: message,
                        })}
                      >
                        <label>Message</label>
                        <TextArea
                          value={message}
                          placeholder="Message"
                          onChange={(e) => setMessage(e.target.value)}
                          style={{ borderColor: '#eaeaea', marginBottom: 12 }}
                        />
                      </Form.Field>

                      <Button primary type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Segment>
                )}
              </Grid.Column>
            </Grid>
          </Container>
        </Media>
        <Media at="mobile">
          <Container style={{ marginBottom: 80, marginTop: 80 }}>
            <Header
              as="h1"
              style={{
                fontFamily: 'Tangerine',
                fontSize: 60,
                fontWeight: 100,
              }}
            >
              Contact details
            </Header>
            <p>Email:</p>
            <p>Cell:</p>

            {showSuccess ? (
              <>
                <Message
                  header="Success!"
                  content="Your message was sent successfully. We will get back to you shortly."
                />
                <a href="/">
                  <Button primary>Back home</Button>
                </a>
              </>
            ) : (
              <Segment style={{ padding: 30 }} className="contact">
                <Header as="h3" textAlign="center" style={{ fontSize: 24 }}>
                  Send an enquiry
                </Header>
                {hasError && (
                  <Message
                    error
                    header="An error occurred"
                    content="Something went wrong. Please try to submit your request again"
                  />
                )}

                <Form onSubmit={submit} loading={isLoading}>
                  <Form.Field
                    error={getInputError({ hasBeenSubmitted, value: name })}
                    style={{ paddingBottom: 12 }}
                  >
                    <label>Name</label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      value={name}
                      style={{ borderColor: '#eaeaea' }}
                    />
                  </Form.Field>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ width: '48%' }}>
                      <Form.Field
                        style={{ paddingBottom: 24 }}
                        control={Input}
                        value={email}
                        label="Email"
                        error={getEmailError({ hasBeenSubmitted, email })}
                      >
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jason@gmail.com"
                          style={{ borderColor: '#eaeaea' }}
                        />
                      </Form.Field>
                    </div>
                    <div style={{ width: '48%' }}>
                      <Form.Field
                        control={Input}
                        value={contact}
                        label="Contact number"
                      >
                        <input
                          onChange={(e) => setContact(e.target.value)}
                          placeholder="0831234567"
                          style={{ borderColor: '#eaeaea' }}
                        />
                      </Form.Field>
                    </div>
                  </div>
                  <Form.Field
                    error={getInputError({
                      hasBeenSubmitted,
                      value: message,
                    })}
                  >
                    <label>Message</label>
                    <TextArea
                      value={message}
                      placeholder="Message"
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ borderColor: '#eaeaea', marginBottom: 12 }}
                    />
                  </Form.Field>

                  <Button primary type="submit">
                    Submit
                  </Button>
                </Form>
              </Segment>
            )}
          </Container>
        </Media>
      </Layout>
    </MediaContextProvider>
  );
};

export default Contact;
