import PropTypes from 'prop-types';
import { useState } from 'react';
import '../style/components/DetailsOrder.css';

function DetailsOrder(props) {
  const { order, orderCart } = props;
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));

  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const showItems = (items) => items.map((product, index) => (
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
          {product.qty}
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
          {(Number(product.price) * product.qty).toFixed(2).replace('.', ',')}
        </h1>
      </td>
      {
        !order
          && (
            <td className="btn">
              <button
                type="button"
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                onClick={ () => removeItem(product.id) }
                className="btn"
              >
                <p>Remover</p>
              </button>
            </td>
          )
      }
    </tr>
  ));

  const showTotalPrice = (items) => {
    let totalPrice = 0;
    for (let index = 0; index < items.length; index += 1) {
      totalPrice += items[index].qty * items[index].price;
    }
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    return (
      <h1
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total Price: ${totalPrice.toFixed(2).replace('.', ',')}`}
      </h1>
    );
  };

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
            { !order && <th>Remover item</th> }
          </tr>
          { order ? showItems(orderCart) : showItems(cart) }
        </tbody>
      </table>
      <div className="total">
        { order ? showTotalPrice(orderCart) : showTotalPrice(cart)}
      </div>
    </div>
  );
}

DetailsOrder.propTypes = {
  order: PropTypes.bool.isRequired,
  orderCart: PropTypes.oneOfType([
    PropTypes.shape,
    PropTypes.bool,
  ]).isRequired,
};

export default DetailsOrder;
