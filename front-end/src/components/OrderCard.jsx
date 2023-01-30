import '../style/components/OrderCard.css';

function OrderCard(props) {
  const { id, totalPrice, saleDate, status } = props;
  return (
    <div>
      <a href={ `localhost:3000/customer/orders/${id}` }>
        <p>{`Pedido ${id}`}</p>
        <p>{`${saleDate}`}</p>
        <p>{`${status}`}</p>
        <p>{`R$${totalPrice.replace('.', ',')}`}</p>
      </a>
    </div>
  );
}

export default OrderCard;
