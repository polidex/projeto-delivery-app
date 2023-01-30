import { useState } from 'react';
import '../style/components/DetailsOrder.css';

function DetailsOrder() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));

  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const showItems = () => cart.map((product, index) => (
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
    </tr>
  ));

  const showTotalPrice = () => {
    let totalPrice = 0;
    for (let index = 0; index < items.length; index += 1) {
      totalPrice += cart[index].qty * cart[index].price;
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
            <th>Remover item</th>
          </tr>
          { showItems() }
        </tbody>
      </table>
      <div className="total">
        { showTotalPrice() }
      </div>
    </div>
  );
}

export default DetailsOrder;
