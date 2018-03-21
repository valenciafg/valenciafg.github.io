import React from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';

const ContactSection = () => (
  <div className="contact">
    <Segment vertical textAlign="center" padded="very">
      <Header as="h1" icon textAlign="center">
        <Header.Content>
          <h1>Contact Me</h1>
          <Header.Subheader className="social_icons">
            <a
              href="https://github.com/valenciafg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                circular
                name="github"
                className="contact"
                size="huge"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/valenciafg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                circular
                name="linkedin"
                className="contact"
                size="huge"
              />
            </a>
            <a
              href="mailto:valencia6x@gmail.com?Subject=Hi%20Victor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                circular
                name="mail"
                className="contact"
                size="huge"
              />
            </a>
          </Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  </div>
);

export default ContactSection;
