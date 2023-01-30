import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import DetailsOrder from '../components/DetailsOrder';
import Menu from '../components/Menu';
import '../style/Details.css';

function Details(props) {
  const [data, setData] = useState();
  const s = 'entregue';
  const teste = [{
    id: 1,
    name: 'Skol Lata 250ml',
    price: '2.20',
    qty: 3,
    urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  }];

  useEffect(() => {
    async function fetchOrderByID() {
      const { match } = props;
      const { params } = match;
      const { id } = params;
      setData(await getOrderByID(id));
    }
    fetchOrderByID();
  }, []);

  console.log(data);

  return (
    <div>
      <Menu />
      <h1>Detalhe do Pedido</h1>
      <div className="pedido-infos">
        <h4
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          Pedido XXXX;
        </h4>
        <h4
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          P. Vend: Nome Completo
        </h4>
        <h4
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          xx/xx/xxxx
        </h4>
        <h4
          data-testid={
            `customer_order_details__element-order-details-label-delivery-status${s}`
          }
        >
          Status
        </h4>
        <h4
          data-testid="customer_order_details__button-delivery-check"
        >
          MARCAR COMO ENTREGUE
        </h4>
      </div>
      <DetailsOrder order orderCart={ teste } />
    </div>
  );
}

Details.propTypes = {
  match: PropTypes.shape.isRequired,
  params: PropTypes.shape.isRequired,
  id: PropTypes.number.isRequired,
};

export default Details;
