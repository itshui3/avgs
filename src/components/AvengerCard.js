import React from 'react';
import {Card, CardBody, CardImg} from 'reactstrap';

export default AvengerCard;

function AvengerCard({avg}) {
  console.log(avg);
  return (
    <Card>
      <CardImg src={avg.thumbnail} />
      <CardBody>
        {avg.description}
      </CardBody>
    </Card>
  )

}