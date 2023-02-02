import moment from 'moment/moment';
import 'moment/locale/pt-br';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getOrderByID, updateStatus } from '../../Api/api';
import DetailsOrder from '../../components/seller/DetailsOrder';
import OrdersMenu from '../../components/OrdersMenu';
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

  const prepareOrder = async (orderId) => {
    await updateStatus(orderId, 'Preparando');
    async function fetchOrderByID() {
      setInfos(await getOrderByID(id));
    }
    fetchOrderByID();
  };

  const dispatchOrder = async (orderId) => {
    await updateStatus(orderId, 'Em Trânsito');
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
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          { `Pedido ${showOrderId(infos.data.id)}` }
        </h4>
        <h4
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          {
            moment(infos.data.saleDate).format('L')
          }
        </h4>
        <h4
          data-testid="seller_order_details__element-order-details-label-delivery-status"
          className="status"
        >
          {infos.data.status}
        </h4>
        <button
          type="button"
          className="btn-status"
          data-testid="seller_order_details__button-preparing-check"
          onClick={ () => prepareOrder(infos.data.id) }
          disabled={ infos.data.status !== 'Pendente' }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          className="btn-status"
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ () => dispatchOrder(infos.data.id) }
          disabled={ infos.data.status !== 'Preparando' }
        >
          SAIU PARA ENTREGA
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
      <OrdersMenu />
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
