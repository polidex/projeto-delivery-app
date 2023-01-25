import '../style/Products.css';
import { useEffect, useState } from 'react';
import ProductsCard from '../components/ProductsCard';
import { getProducts } from '../Api/api';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => console.log(products), [products]);
  useEffect(() => {
    async function fetchProducts() {
      setProducts(await getProducts());
    }
    fetchProducts();
  }, []);
  return (
    <main>
      <h1>/Products</h1>

      {products.map((product) => {
        console.log(product);
        const { name, id, price, urlImage } = product;
        return (
          <ProductsCard
            key={ name }
            id={ id }
            name={ name }
            price={ price }
            urlImage={ urlImage }
          />
        );
      })}
    </main>
  );
}

export default Products;
