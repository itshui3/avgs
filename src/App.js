import React, {useState, useEffect} from 'react'; 
import { Route, Link } from 'react-router-dom';
import { Navbar, NavItem, Button, ButtonGroup } from 'reactstrap';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <header>
      <Navbar>
      <NavItem>
        <Link to='/'>Home</Link>
      </NavItem>
      <NavItem>
        <Link to='/avengers'>Avengers List</Link>

      </NavItem>

      </Navbar>
      <Route exact path="/" component={Home}/>
      <Route path="/avengers" component={AvengersList} />
    </header>


  );
}



export default App;
