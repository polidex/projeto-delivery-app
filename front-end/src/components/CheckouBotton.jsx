import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function CheckoutButton(props) {
  const { productsQty, productsList, cartEmpty } = props;
  const [value, setValue] = useState(0.00);

  useEffect(() => {
    const totalValue = productsList
      .reduce((acc, current) => Number(acc + (productsQty[current
        .id]) * current.price), [0]);
    setValue(Number(totalValue).toFixed(2));
  }, [productsQty, productsList]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        disabled={ cartEmpty }
        type="button"
        data-testid="customer_products__button-cart"
      >
        <h5 data-testid="customer_products__checkout-bottom-value">
          {
            String(value).replace('.', ',')
          }

        </h5>
      </button>
    </div>
  );
}

CheckoutButton.propTypes = {
  cartEmpty: PropTypes.bool.isRequired,
  productsQty: PropTypes.shape({
    1: PropTypes.number,
    2: PropTypes.number,
    3: PropTypes.number,
    4: PropTypes.number,
    5: PropTypes.number,
    6: PropTypes.number,
    7: PropTypes.number,
    8: PropTypes.number,
    9: PropTypes.number,
    10: PropTypes.number,
    11: PropTypes.number,
  }).isRequired,
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  })).isRequired,

};

export default CheckoutButton;
