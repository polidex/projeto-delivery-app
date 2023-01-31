import { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import OrderCard from '../../components/customer/OrderCard';
import { getSales } from '../../Api/api';

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    async function fetchOrders() {
      const { data } = await getSales(user.token);
      setOrders(data);
    }
    fetchOrders();
  }, []);

  return (
    <div>
      <Menu />
      {orders && orders.map((order) => {
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
