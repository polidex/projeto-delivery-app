import moment from 'moment/moment';
import 'moment/locale/pt-br';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getOrderByID } from '../Api/api';
import DetailsOrder from '../components/DetailsOrder';
import Menu from '../components/Menu';
import '../style/Details.css';

function Details(props) {
  const [infos, setInfos] = useState();
  const { match } = props;
  const { params } = match;
  const { id } = params;

  useEffect(() => {
    async function fetchOrderByID() {
      setInfos(await getOrderByID(id));
    }
    fetchOrderByID();
  }, []);

  const showOrderId = (orderId) => {
    const TRES = 3;
    switch (orderId.toString().length) {
    case 1:
      return `000${orderId}`;
    case 2:
      return `00${orderId}`;
    case TRES:
      return `0${orderId}`;
    default:
      return orderId;
    }
  };

  const infosProduct = () => (
    <div className="card-pedido">
      <h1>Detalhe do Pedido</h1>
      <div className="header-pedido">
        <h4
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          { `Pedido ${showOrderId(infos.data.id)}` }
        </h4>
        <h4
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {`P. Vend: ${infos.data.sellerId}`}
        </h4>
        <h4
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {
            moment(infos.data.saleDate).format('L')
          }
        </h4>
        <h4
          data-testid={
            `customer_order_details__element-order-details-label-delivery-status-${id}`
          }
        >
          {infos.data.status}
        </h4>
        <h4
          data-testid="customer_order_details__button-delivery-check"
        >
          MARCAR COMO ENTREGUE
          { console.log(infos.data)}
        </h4>
      </div>
      <DetailsOrder
        products={ infos.data.products }
        totalPrice={ infos.data.totalPrice }
      />
    </div>
  );

  return (
    <div>
      <Menu />
      { infos && infosProduct()}
    </div>
  );
}

Details.propTypes = {
  match: PropTypes.shape.isRequired,
  params: PropTypes.shape.isRequired,
  id: PropTypes.number.isRequired,
};

export default Details;
