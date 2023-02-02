import moment from 'moment/moment';
import 'moment/locale/pt-br';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getOrderByID, updateStatus } from '../../Api/api';
import DetailsOrder from '../../components/customer/DetailsOrder';
import Menu from '../../components/Menu';
import '../../style/Details.css';

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
  }, [id]);

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

  const receiveOrder = async () => {
    await updateStatus(infos.data.id, 'Entregue');
    async function fetchOrderByID() {
      setInfos(await getOrderByID(id));
    }
    fetchOrderByID();
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
          {`P. Vend: ${infos.data.sellers.name}`}
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
          className="status"
        >
          {infos.data.status}
        </h4>
        <button
          type="button"
          className="btn-status"
          data-testid="customer_order_details__button-delivery-check"
          onClick={ receiveOrder }
          disabled={ infos.data.status !== 'Em Trânsito' }
        >
          MARCAR COMO ENTREGUE
        </button>
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
