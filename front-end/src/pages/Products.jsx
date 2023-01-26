import '../style/Products.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsCard from '../components/ProductsCard';
import { getProducts } from '../Api/api';
import Menu from '../components/Menu';
import CheckoutButton from '../components/CheckouBotton';

function Products() {
  const [productsList, setProductsList] = useState([]);
  const [productsQty, setProductsQty] = useState({});
  const [cartEmpty, setCartEmpty] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      setProductsList(await getProducts());
    }
    fetchProducts();
  }, [productsQty]);

  useEffect(() => {
    const isCartEmpty = () => {
      const qtyArray = [];
      for (let index = 1; index <= productsList.length; index += 1) {
        qtyArray.push(productsQty[index]);
        productsList[index - 1].qty = productsQty[index];

        const vasco = [];

        for (let indexB = 0; indexB <= productsList.length; indexB += 1) {
          if (productsQty[indexB + 1] > 0) {
            vasco.push(productsList[indexB]);
            localStorage.setItem('cart', JSON.stringify(vasco));
          }
        }

        if (qtyArray.some((qty) => qty > 0)) {
          setCartEmpty(false);
        } else {
          setCartEmpty(true);
        }
      }
    };

    isCartEmpty();
  }, [productsQty, productsList]);

  return (
    <main>
      <Menu />
      <h1>/Products</h1>

      {productsList.map((product) => {
        const { name, id, price, urlImage } = product;
        return (
          <ProductsCard
            key={ name }
            id={ id }
            name={ name }
            price={ price }
            products={ productsQty }
            setProducts={ setProductsQty }
            urlImage={ urlImage }
          />
        );
      })}

      <Link to="/customer/checkout">
        <CheckoutButton
          cartEmpty={ cartEmpty }
          productsList={ productsList }
          productsQty={ productsQty }
        />
      </Link>

    </main>
  );
}

export default Products;
