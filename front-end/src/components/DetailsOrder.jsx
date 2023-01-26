import PropTypes from 'prop-types';

function DetailsOrder(props) {
  const { removeBtn } = props;

  console.log(removeBtn);

  const showItems = () => {
    const items = [
      { id: 1, name: 'cerveja', qty: 3, value: 3.5, totalValue: 10.5 },
      { id: 2, name: 'vasco', qty: 2, value: 5, totalValue: 10.0 },
    ];

    localStorage.setItem('carrinho', JSON.stringify(items));
    const cart = JSON.parse(localStorage.getItem('carrinho'));

    return cart.map((product) => (
      <tr key={ product.id }>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.qty}</td>
        <td>{product.value}</td>
        <td>{product.totalValue}</td>
        { removeBtn ? <td><button type="button">Remover</button></td> : null}
      </tr>
    ));
  };

  return (
    <div>
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
    </div>
  );
}

DetailsOrder.propTypes = {
  removeBtn: PropTypes.bool.isRequired,
};

export default DetailsOrder;
