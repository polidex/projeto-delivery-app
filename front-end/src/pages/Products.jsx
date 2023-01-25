import '../style/Products.css';
import { useEffect, useState } from 'react';
import ProductsCard from '../components/ProductsCard';
import { getProducts } from '../Api/api';
import Menu from '../components/Menu';
import CheckoutButton from '../components/CheckouBotton';
import { Link } from react-router-dom;

function Products() {
  const [productsList, setProductsList] = useState([]);
  const [productsQty, setProductsQty] = useState({});
  useEffect(() => {
    async function fetchProducts() {
      setProductsList(await getProducts());
    }
    fetchProducts();
  }, []);

  // const isCartEmpty = () => { 
  //   cart.every((cart) => cart.quantity === 0 || cart.quantity === '');
  // };

  return (
    <main>
      <Menu />
      <h1>/Products</h1>

      {productsList.map((product) => {
        const { name, id, price, urlImage } = product;
        return (
          <>
            <ProductsCard
              key={ name }
              id={ id }
              name={ name }
              price={ price }
              urlImage={ urlImage }
            />
            <button
              data-testid="customer_products__button-cart"
              type="button"
              disabled={ isCartEmpty() }
            >
              <Link to="/customer/checkout">
                Ver carrinho R$
                <p data-testid="customer_products__checkout-bottom-value"> value </p>
              </Link>
            </button>
          </>
        );
      })}
      <CheckoutButton productsList={ productsList } productsQty={ productsQty } />
    </main>
  );
}

export default Products;
