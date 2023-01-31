import { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import OrderCard from '../../components/seller/OrderCard';
import { getSeller } from '../../Api/api';

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    async function fetchOrders() {
      const { data } = await getSeller(user.token);
      setOrders(data);
    }
    fetchOrders();
  }, []);

  return (
    <div>
      <Menu />
      {orders && orders.map((order) => {
        const { id, totalPrice, saleDate, status,
          deliveryAddress, deliveryNumber } = order;
        return (
          <OrderCard
            key={ id }
            id={ id }
            totalPrice={ totalPrice }
            saleDate={ saleDate }
            status={ status }
            address={ deliveryAddress }
            number={ deliveryNumber }
          />
        );
      })}
    </div>
  );
}

export default Orders;
