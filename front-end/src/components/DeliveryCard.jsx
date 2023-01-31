import PropTypes from 'prop-types';
import '../style/components/DeliveryCard.css';
import { Link } from 'react-router-dom';

function DeliveryCard(props) {
  const { id, totalPrice, saleDate, status, address, number } = props;
  return (
    <div>
      <Link to={ `/seller/orders/${id}` } className="delivery-card">
        <p data-testid={ `seller_orders__element-order-id-${id}` }>{`Pedido ${id}`}</p>
        <p
          data-testid={ `seller_orders__element-order-date-${id}` }
        >
          {`${new Date(saleDate).toLocaleDateString('pt-br')}`}
        </p>
        <p
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          {`${status}`}
        </p>
        <p
          data-testid={ `seller_orders__element-card-price-${id}` }
        >
          {`R$${totalPrice.replace('.', ',')}`}
        </p>
        <p
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          {`${address}, ${number}`}
        </p>
      </Link>
    </div>
  );
}

DeliveryCard.propTypes = {
  id: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
  address: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default DeliveryCard;
