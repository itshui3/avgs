import React from 'react';
import {Link, Route} from 'react-router-dom';
import './Container.less';

export default function Container() {
  return (
    <div className='container-hello-world'>
      Hello, world
      <Link to={{
        pathname: './blog',
        search: '?name=gabe',
        hash: '#theHash',
        state: {
          from: 'home page'
        }
      }}>Blog</Link>
      <Route path='./blog' render={props => {

        const { from } = props.location.state;
        return <h3>You came {from}</h3>
      }} />
    </div>
  )
}