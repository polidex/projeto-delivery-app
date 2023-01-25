import '../style/components/ProductsCard.css';
import { useState } from 'react';

function ProductsCard(props) {
  const [products, setProducts] = useState({});
  const { id, price, name, urlImage } = props;

  const productsHandle = (target) => {
    if (!products[target.name]) {
      setProducts((prevState) => ({
        ...prevState,
        [target.name]: 0,
      }));
    }
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
    <div id="card">
      <p
        id="price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`${price.replace('.', ',')}`}
      </p>
      <img
        id="image"
        alt={ `imagem do produto ${id}` }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
      />
      <div id="card-menu">
        <p
          id="card-title"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </p>
        <button
          id="btn-rm"
          onClick={ (event) => productsHandle(event.target) }
          name={ id }
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          id="int-qtt"
          type="number"
          name={ id }
          onChange={ (e) => inputProductsHandle(e.target) }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ products[id] }
        />
        <button
          onClick={ (event) => productsHandle(event.target) }
          name={ id }
          id="btn-add"
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </div>
    </div>

  );
}

export default ProductsCard;
