import React from 'react';
import { Route, Link } from 'react-router'
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import MainContent from './components/MainContent';

import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <h1>Friends Login!</h1>
      <PrivateRoute exact path="/protected" component={MainContent} />
      <Route path="/" component={Login} />
    </div>
  );
}
 
export default App;