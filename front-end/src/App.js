import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
  const history = useHistory();

  return (
    <>
      <Route exact path="/" render={ () => history.push('/login') } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/products" component={ Products } />
    </>
  );
}

export default App;
