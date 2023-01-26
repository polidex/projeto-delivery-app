import '../style/components/AddressCard.css';

function AddressCard() {
  return (
    <div id="checkout-addresscard">
      <h2>Detalhes e Endereço de Entrega</h2>
      <div id="form-box">
        <label
          data-testid="customer_checkout__select-seller"
          htmlFor="seller"
          id="select-seller"
        >
          P. Vendedora Responsável:
          <select name="seller" id="seller">
            <option value="fulana-pereira">Fulana Pereira</option>
          </select>
        </label>
        <label htmlFor="adress">
          Endereço
          <input data-testid="customer_checkout__input-address" type="text" />
        </label>
        <label htmlFor="adress-number">
          Número
          <input data-testid="customer_checkout__input-address-number" type="number" />
        </label>
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
          id="submit-btn"
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

export default AddressCard;
