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
      await submitAddress(addressInfos.seller, addressInfos.street, addressInfos.number);
      history.push('/customer/orders');
    } catch (error) {
      alert('error');
    }
  };

  return (
    <div className="checkout-addresscard">
      <h2>Detalhes e Endereço de Entrega</h2>
      <div className="form-box">
        <label
          data-testid="customer_checkout__select-seller"
          htmlFor="seller"
          className="select-seller"
        >
          Vendedora Responsável:
          <select
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
          className="submit-btn"
          onClick={ submit }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

export default AddressCard;
