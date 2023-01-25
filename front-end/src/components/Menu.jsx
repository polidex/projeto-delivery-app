import { Link } from 'react-router-dom';
import '../style/Menu.css';

const vasco = () => {
  localStorage.removeItem('user');
};

function Menu() {
  const getDataInStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  };

  return (
    <div className="menu">
      <div className="btn-produtos">
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          <h4>Produtos</h4>
        </Link>
      </div>

      <div className="btn-orders">
        <Link
          to="/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <h4>Meus Pedidos</h4>
        </Link>
      </div>

      <div className="username">
        <h4
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { getDataInStorage().name }
        </h4>
      </div>

      <div className="btn-logout">
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ vasco }
        >
          <h4>Sair</h4>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
