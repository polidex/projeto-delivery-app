import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import OrderCard from '../components/OrderCard';
import { getSales } from '../Api/api';

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    async function fetchOrders() {
      setOrders(await getSales(token));
    }
    fetchOrders();
  }, []);

  return (
    <div>
      <Menu />
      {orders.map((order) => {
        const { id, totalPrice, saleDate, status } = order;
        return (
          <OrderCard
            key={ id }
            id={ id }
            totalPrice={ totalPrice }
            saleDate={ saleDate }
            status={ status }
          />
        );
      })}
    </div>
  );
}

export default Orders;
