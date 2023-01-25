import '../style/Products.css';
import { useEffect, useState } from 'react';
import ProductsCard from '../components/ProductsCard';
import { getProducts } from '../Api/api';
import Menu from '../components/Menu';
import { Link } from react-router-dom;

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => console.log(products), [products]);
  useEffect(() => {
    async function fetchProducts() {
      setProducts(await getProducts());
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

      {products.map((product) => {
        console.log(product);
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
    </main>
  );
}

export default Products;
