import React from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import Nav from './components/Nav'
import SubNav from './components/SubNav'


import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavWrapper} />
      
      <Route path = './:title' component={SubNav}/>
      <Route
        path="/:title"
        render={props => (
          <SubNav {...props} /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
        )}
      />
    </div>
  );
}

export default App;
