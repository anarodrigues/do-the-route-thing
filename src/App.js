import { Component, Fragment } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Nav from './Nav.js';
import Home from './Home.js';

import Login from './Login.js';
import About from './About.js';
import UserAccount from './UserAccount.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userNumber: 2,
    }
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Nav />

          <Route exact path="/" component={Home} />

          <Route path="/about" component={About} />

          <Route path="/login" render={() => {
            return (
              <Login visitorNumber={this.state.userNumber} />
            )
          }}
          />

          <Route path="/account/:name" component={UserAccount} />

        </Fragment>
      </Router>
    )
  }
}


export default App;
