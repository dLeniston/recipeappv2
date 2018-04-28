import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Main from './Main';
import Landing from '../components/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container" style={{"width" : "100%" }}>
          <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Main} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);
