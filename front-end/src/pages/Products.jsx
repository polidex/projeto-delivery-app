import '../style/Products.css';
import { useEffect, useState } from 'react';
import ProductsCard from '../components/ProductsCard';
import { getProducts } from '../Api/api';
import Menu from '../components/Menu';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => console.log(products), [products]);
  useEffect(() => {
    async function fetchProducts() {
      return getProducts();
    }
    setProducts(fetchProducts());
  }, []);
  return (
    <main>
      <Menu />
      <h1>/Products</h1>
      {ProductsCard(1)}
    </main>
  );
}

export default Products;
