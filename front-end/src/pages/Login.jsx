import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../Api/api';
import '../style/Login.css';

function Login() {
  const productsLink = '/customer/products';
  const sellerLink = '/seller/orders';
  const adminLink = '/admin/manage';
  const [loginInfos, setLoginInfos] = useState({
    email: '',
    password: '',
  });
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [isDisabledError, setIsDisabledError] = useState('notError');
  const history = useHistory();
  const redirectFunc = (data) => {
    if (data.role === 'administrator') {
      history.push(adminLink);
    } if (data.role === 'customer') {
      history.push(productsLink);
    } if (data.role === 'seller') {
      history.push(sellerLink);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) redirectFunc(user);
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { className, value } = e.target;
    setLoginInfos((prevState) => ({
      ...prevState,
      [className]: value,
    }));

    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const minLength = 6;

    if (className === 'email') {
      if (regex.test(value) && loginInfos.password.length >= minLength) {
        setIsDisabledBtn(false);
      } else {
        setIsDisabledBtn(true);
      }
    }

    if (className === 'password') {
      if (value.length >= minLength && regex.test(loginInfos.email)) {
        setIsDisabledBtn(false);
      } else {
        setIsDisabledBtn(true);
      }
    }
  };

  const errorApi = async () => {
    setIsDisabledError('showError');
  };

  const submitApi = async () => {
    // const goodRequest = 200;
    try {
      const { data } = await loginUser(loginInfos.email, loginInfos.password);
      localStorage.setItem('user', JSON.stringify(data));
      redirectFunc(data);
    } catch {
      errorApi();
    }
  };

  return (
    <div className="login">
      <div className="form-login">
        <div className="form-inputs">
          <h4 className="form-label">Login</h4>
          <input
            type="email"
            className="email"
            placeholder="email@trybeer.com.br"
            value={ loginInfos.email }
            data-testid="common_login__input-email"
            onChange={ handleChange }
          />
          <h4 className="form-label">Senha</h4>
          <input
            type="password"
            className="password"
            placeholder="**********"
            value={ loginInfos.password }
            data-testid="common_login__input-password"
            onChange={ handleChange }
          />
        </div>
        <div className="form-buttons">
          <button
            type="button"
            data-testid="common_login__button-login"
            className="btn-login"
            disabled={ isDisabledBtn }
            onClick={ submitApi }
          >
            LOGIN
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
            className="btn-register"
            onClick={ () => history.push('/register') }
          >
            Ainda não tenho conta
          </button>
        </div>
      </div>
      <p
        data-testid="common_login__element-invalid-email"
        className={ `invalid-login ${isDisabledError}` }
      >
        User not found
      </p>
    </div>
  );
}

export default Login;
