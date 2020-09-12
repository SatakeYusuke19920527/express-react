import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/main' component={Main}  />
      </Switch>
    </Router>
  );
}

export default App;
