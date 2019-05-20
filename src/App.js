import React, { Component} from 'react';
import {NavLink} from 'react-router-dom'

import Route from './Router'


const Navigation = (props) => <nav>
  <ul>
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/cart'>Cart</NavLink>
    </li>
  </ul>
</nav>

class App extends Component {
  render(){
  return <div className='page-container'>
    <Navigation />
    <Route />
  </div>
}
}

export default App;
