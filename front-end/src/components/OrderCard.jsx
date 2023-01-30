import { Link } from 'react-router-dom';
import '../style/components/OrderCard.css';

function OrderCard(props) {
  const { id, totalPrice, saleDate, status } = props;
  return (
    <div>
      <Link to={ `/customer/orders/${id}` }>
        <p>{`Pedido ${id}`}</p>
        <p>{`${saleDate}`}</p>
        <p>{`${status}`}</p>
        <p>{`R$${totalPrice.replace('.', ',')}`}</p>
      </Link>
    </div>
  );
}

export default OrderCard;
