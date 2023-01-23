import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  const history = useHistory();

  return (
    <>
      <Route exact path="/" render={ () => history.push('/login') } />
      <Route exact path="/login" component={ Login } />
    </>
  );
}

export default App;
