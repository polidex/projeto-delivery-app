import PropTypes from 'prop-types';
import '../../style/components/customer/ProductsCard.css';
import { useEffect } from 'react';

function ProductsCard(props) {
  const { id, price, name, urlImage, products, setProducts } = props;

  useEffect(() => {
    setProducts((prevState) => ({
      ...prevState,
      [id]: 0,
    }));
  }, [id, setProducts]);

  const productsHandle = (target) => {
    if (target.id === 'btn-add') {
      setProducts((prevState) => ({
        ...prevState,
        [target.name]: Number(prevState[target.name]) + 1,
      }));
    }
    if (target.id === 'btn-rm' && products[target.name] > 0) {
      setProducts((prevState) => ({
        ...prevState,
        [target.name]: Number(prevState[target.name]) - 1,
      }));
    }
  };

  const inputProductsHandle = (target) => {
    if (target.value >= 0) {
      setProducts((prevState) => ({
        ...prevState,
        [target.name]: Number(target.value),
      }));
    }
  };
  return (
    <div className="card">
      <p
        className="price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`R$ ${price.replace('.', ',')}`}
      </p>
      <img
        className="image"
        alt={ `imagem do produto ${id}` }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
      />
      <div className="card-menu">
        <p
          className="card-title"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </p>
        <div className="card-buttons">
          <button
            id="btn-rm"
            className="btn-rm"
            onClick={ (event) => productsHandle(event.target) }
            name={ id }
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </button>
          <input
            className="int-qtt"
            type="number"
            name={ id }
            onChange={ (e) => inputProductsHandle(e.target) }
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ products[id] }
          />
          <button
            id="btn-add"
            onClick={ (event) => productsHandle(event.target) }
            name={ id }
            className="btn-add"
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            +
          </button>
        </div>
      </div>
    </div>

  );
}

ProductsCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  products: PropTypes.shape({
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
  setProducts: PropTypes.func.isRequired,
  urlImage: PropTypes.string.isRequired,
};

export default ProductsCard;
