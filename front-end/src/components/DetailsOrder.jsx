import PropTypes from 'prop-types';
import '../style/components/DetailsOrder.css';

function DetailsOrder(props) {
  const { products, totalPrice } = props;

  const showItems = () => products.map((product, index) => (
    <tr key={ product.id }>
      <td
        className="index"
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        <h1
          className="text-center"
        >
          {index + 1}
        </h1>
      </td>
      <td>
        <h1
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
          className="desc"
        >
          {product.name}
        </h1>
      </td>
      <td className="qty">
        <h1
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
          className="text-center"
        >
          {product.SaleProduct.quantity}
        </h1>
      </td>
      <td className="unit">
        <h1
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
          className="text-center"
        >
          {product.price.replace('.', ',')}
        </h1>
      </td>
      <td className="sub">
        <h1
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          className="text-center"
        >
          {(Number(product.price) * product.SaleProduct.quantity)
            .toFixed(2).replace('.', ',')}
        </h1>
      </td>
    </tr>
  ));

  return (
    <div className="details">
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
          { showItems() }
        </tbody>
      </table>
      <div className="total">
        <h1
          data-testid="customer_order_details__element-order-total-price"
        >
          { `Total Price: ${totalPrice.replace('.', ',')}` }
        </h1>
      </div>
    </div>
  );
}

DetailsOrder.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default DetailsOrder;
