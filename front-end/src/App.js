import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
<<<<<<< Updated upstream
=======
import Products from './pages/Products';
>>>>>>> Stashed changes

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
