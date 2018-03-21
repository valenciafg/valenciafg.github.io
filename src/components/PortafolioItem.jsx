import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image, Label } from 'semantic-ui-react';

function listTechnologies(technologies) {
  return technologies.map(tech => (
    <Label key={tech.id} tag color="black">{tech.name}</Label>
  ));
}
const PortafolioItem = ({ info }) => (
  <Card className="portafolio-item">
    <Image src={info.image} />
    <Card.Content>
      <Card.Header>
        {info.title}
      </Card.Header>
      <Card.Description>
        {info.description}
      </Card.Description>
      <Card.Meta>
        <br />
        <Label color="black" as="a" href={info.url} target="_blank">
          <Icon name="code" />
        </Label>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      {listTechnologies(info.technologies)}
    </Card.Content>
  </Card>
);

PortafolioItem.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
    url: PropTypes.string,
  }).isRequired,
};

export default PortafolioItem;
