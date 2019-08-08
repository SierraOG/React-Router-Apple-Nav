import React from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav'


import { Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// key={location.key}

function App({location}) {
  return (
    <div className="App">
      <Route path="/" component={NavWrapper} />
            
      <TransitionGroup>
        <CSSTransition
          key = {location.key}
          timeout={{ enter: 50, exit: 50 }}
          classNames ={'fade'}
        >
          <section className="route-section">
            <Route
              path="/:title"
              render={props => (
                <SubNav {...props} /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
              )}
            />
            </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(App);
