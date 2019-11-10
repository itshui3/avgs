import React, {useState} from 'react';
import { Card, CardImg, CardBody, Modal, ModalBody, Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

export default AvengerButton;

function AvengerButton({d, num}) {

  const id = "/" + num;

  return (
    <>
      <ButtonGroup>
        <Button color="danger">
          <Link to={id}>{d.name}</Link>
        </Button>
      </ButtonGroup>
    </>

  )
}