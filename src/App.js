import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { List, Shorten, Home, Login,User } from './pages';
import './styles/App.css';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test />
        {/* <Route exact path="/" component={} />
        <Switch>
          <Route path="/list" component={List} />
        </Switch> */}
      </div>
    );
  }
}

export default App;
