import React from 'react';
import { Card } from 'semantic-ui-react';
import PortafolioItem from './PortafolioItem';
import portafolio from '../data/portafolio';

function portafolioItems() {
  return portafolio.map(info => (
    <PortafolioItem key={info.id} info={info} />
  ));
}
const PortafolioLayout = () => (
  <Card.Group>
    {portafolioItems()}
  </Card.Group>
);

export default PortafolioLayout;
