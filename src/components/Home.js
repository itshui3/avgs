import React from 'react';
import styled from 'styled-components';
import { Jumbotron, Button, ButtonGroup } from 'reactstrap';

export default Home;

const SJumbotron = styled(Jumbotron)`
  background: ;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

function Home(props) {
  return (
    <SJumbotron>
      <h2>Home</h2>
      <p>This is the home page</p>
      <hr></hr>
      <ButtonGroup>
        <Button type="danger"><a href="/avengers">Avengers List</a></Button>
      </ButtonGroup>
    </SJumbotron>
  )
}