import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.componenet';

const Hat = () => (
  <div>
    <h1>HATSPAGE</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Hat} />
      </Switch>
    </div>
  );
}

export default App;
