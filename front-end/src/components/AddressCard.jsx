import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { submitAddress } from '../Api/api';
import '../style/components/AddressCard.css';

function AddressCard() {
  const [addressInfos, setAddressInfos] = useState({
    seller: '',
    street: '',
    number: '',
  });
  const history = useHistory();

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setAddressInfos((prevState) => ({ ...prevState, [id]: value }));
  };

  const submit = async () => {
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
      const cart = JSON.parse(localStorage.getItem('cart'));
      const products = cart.map((product) => (
        { id: product.id,
          quantity: product.qty,
        }));
      const body = {
        token,
        totalPrice,
        deliveryAddress: addressInfos.street,
        deliveryNumber: addressInfos.number,
        products,
      };
      const APIResponse = await submitAddress(body);
      const { id } = APIResponse.data;
      console.log(`id: ${id}`);
      console.log(APIResponse);

      history.push(`orders/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="checkout-addresscard">
      <h2>Detalhes e Endereço de Entrega</h2>
      <div id="form-box">
        <label
          htmlFor="seller"
          id="select-seller"
        >
          Vendedora Responsável:
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
            id="seller"
            value={ addressInfos.seller }
            onClick={ handleChange }
          >
            <option value="Fulana Pereira">Fulana Pereira</option>
            <option value="Igor Polido">Igor Polido</option>
          </select>
        </label>
        <label htmlFor="adress">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            id="street"
            value={ addressInfos.street }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="adress-number">
          Número
          <input
            data-testid="customer_checkout__input-address-number"
            type="number"
            id="number"
            value={ addressInfos.number }
            onChange={ handleChange }
          />
        </label>
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
          id="submit-btn"
          onClick={ submit }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

export default AddressCard;
