import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
import './App.css';
import Orders from './trackorder';

function App() {
  return (
    <div>
      <Route>
        { <Route path="/" exact component={Home} /> }
        <Route path="/orders" component={Orders} /> 
      </Route>
    </div>
  );
}

export default App;

