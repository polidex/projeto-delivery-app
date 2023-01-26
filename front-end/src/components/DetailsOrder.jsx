import PropTypes from 'prop-types';
import { useState } from 'react';
import '../style/components/DetailsOrder.css';

function DetailsOrder(props) {
  const { removeBtn } = props;
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));

  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const showItems = () => cart.map((product, index) => (
    <tr key={ product.id }>
      <td className="index">
        <h1
          datatest-id={ `customer_checkout__element-order-table-item-number-${index}` }
          className="text-center"
        >
          {index + 1}
        </h1>
      </td>
      <td>
        <h1
          datatest-id={ `customer_checkout__element-order-table-name-${index}` }
          className="desc"
        >
          {product.name}
        </h1>
      </td>
      <td className="qty">
        <h1
          datatest-id={ `customer_checkout__element-order-table-quantity-${index}` }
          className="text-center"
        >
          {product.qty}
        </h1>
      </td>
      <td className="unit">
        <h1
          datatest-id={ `customer_checkout__element-order-table-unit-price-${index}` }
          className="text-center"
        >
          {product.price.replace('.', ',')}
        </h1>
      </td>
      <td className="sub">
        <h1
          datatest-id={ `customer_checkout__element-order-table-sub-total-${index}` }
          className="text-center"
        >
          {(Number(product.price) * product.qty).toFixed(2).replace('.', ',')}
        </h1>
      </td>
      {
        removeBtn
          ? (
            <td className="btn">
              <button
                type="button"
                datatest-id={ `customer_checkout__element-order-table-remove-${index}` }
                onClick={ () => removeItem(product.id) }
                className="btn"
              >
                <p>Remover</p>
              </button>
            </td>
          )
          : null
      }
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
            { removeBtn ? <th>Remover item</th> : null}
          </tr>
          { showItems() }
        </tbody>
      </table>
      <div className="total">
        <h1>Total: R$ XX,XX</h1>
      </div>
    </div>
  );
}

DetailsOrder.propTypes = {
  removeBtn: PropTypes.bool.isRequired,
};

export default DetailsOrder;
