import '../style/Products.css';
import { useEffect, useState } from 'react';
import ProductsCard from '../components/ProductsCard';
import { getProducts } from '../Api/api';
import Menu from '../components/Menu';
import CheckoutButton from '../components/CheckouBotton';

function Products() {
  const [productsList, setProductsList] = useState([]);
  const [productsQty, setProductsQty] = useState({});
  useEffect(() => {
    async function fetchProducts() {
      setProductsList(await getProducts());
    }
    fetchProducts();
  }, []);
  return (
    <main>
      <Menu />
      <h1>/Products</h1>

      {productsList.map((product) => {
        const { name, id, price, urlImage } = product;
        return (
          <ProductsCard
            products={ productsQty }
            setProducts={ setProductsQty }
            key={ name }
            id={ id }
            name={ name }
            price={ price }
            urlImage={ urlImage }
          />
        );
      })}
      <CheckoutButton productsList={ productsList } productsQty={ productsQty } />
    </main>
  );
}

export default Products;
