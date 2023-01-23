import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <>
      <Route exact path="/" component={ Login } />
      <Route exact path="/login" component={ Login } />
    </>
  );
}

export default App;
