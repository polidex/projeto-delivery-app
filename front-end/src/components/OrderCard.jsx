import PropTypes from 'prop-types';
import '../style/components/OrderCard.css';
import { Link } from 'react-router-dom';

function OrderCard(props) {
  const { id, totalPrice, saleDate, status } = props;
  return (
    <div>
      <Link to={ `/customer/orders/${id}` } className="order-card">
        <p data-testid={ `customer_orders__element-order-id-${id}` }>{`Pedido ${id}`}</p>
        <p
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          {`${new Date(saleDate).toLocaleDateString('pt-br')}`}
        </p>
        <p
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          {`${status}`}
        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          {`R$${totalPrice.replace('.', ',')}`}
        </p>
      </Link>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

export default OrderCard;
