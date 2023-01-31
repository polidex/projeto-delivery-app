import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/customer/Products';
import Checkout from './pages/customer/Checkout';
import Details from './pages/customer/Details';
import DetailsSeller from './pages/seller/Details';
import Orders from './pages/customer/Orders';

function App() {
  const history = useHistory();

  return (
    <>
      { /* All */ }
      <Route exact path="/" render={ () => history.push('/login') } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />

      { /* Customer */ }
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders/:id" component={ Details } />
      <Route exact path="/customer/orders" component={ Orders } />

      { /* Seller */ }
      <Route exact path="/seller/orders/:id" component={ DetailsSeller } />
    </>
  );
}

export default App;
