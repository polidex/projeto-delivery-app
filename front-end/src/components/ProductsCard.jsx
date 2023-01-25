import '../style/components/ProductsCard.css';

function ProductsCard() {
  // const productsHandle = (target) => {

  // };

  return (
    <div id="card">
      <p
        id="price"
        data-testid="customer_products__element-card-price-<id>"
      >
        R$4,49
      </p>
      <img
        id="image"
        alt="imagem do produto <id>"
        data-testid="customer_products__img-card-bg-image-<id>"
        src="https://swiftbr.vteximg.com.br/arquivos/ids/184370-1500-1000/620031_HEINEKEN-269ML.png?v=637957499365500000"
      />
      <div id="card-menu">
        <p
          id="card-title"
          data-testid="customer_products__element-card-title-<id>"
        >
          CERVEJA HEINEKEN 269ML
        </p>
        <div id="btns-menu">
          <button
            id="btn-rm"
            type="button"
            data-testid="customer_products__button-card-rm-item-<id>"
          >
            -
          </button>
          <input
            id="int-qtt"
            type="number"
            data-testid="customer_products__input-card-quantity-<id>"
            value="0"
          />
          <button
            id="btn-add"
            type="button"
            data-testid="customer_products__button-card-add-item-<id>"
          >
            +
          </button>
        </div>
      </div>
    </div>

  );
}

export default ProductsCard;
