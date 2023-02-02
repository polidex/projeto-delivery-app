import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { submitAddress } from '../../Api/api';
import '../../style/components/customer/AddressCard.css';

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
    <div className="form-box">
      <h2>Detalhes e Endereço de Entrega</h2>
      <div className="label-select-seller">
        <label htmlFor="seller">
          Vendedora Responsável:
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
            className="select-seller"
            id="seller"
            value={ addressInfos.seller }
            onClick={ handleChange }
          >
            <option value="Fulana Pereira">Fulana Pereira</option>
          </select>
        </label>
      </div>
      <div className="address-box">
        <label htmlFor="adress">
          Endereço:
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            className="input-address"
            id="street"
            value={ addressInfos.street }
            onChange={ handleChange }
          />
        </label>
      </div>
      <div className="number-box">
        <label htmlFor="adress-number">
          Número:
          <input
            data-testid="customer_checkout__input-address-number"
            type="number"
            className="input-number"
            id="number"
            value={ addressInfos.number }
            onChange={ handleChange }
          />
        </label>
      </div>
      <button
        type="submit"
        data-testid="customer_checkout__button-submit-order"
        className="submit-btn"
        onClick={ submit }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

export default AddressCard;
