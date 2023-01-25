import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../Api/api';
import '../style/Login.css';

function Login() {
  const [loginInfos, setLoginInfos] = useState({
    email: '',
    password: '',
  });
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [isDisabledError, setIsDisabledError] = useState('notError');
  const history = useHistory();

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
      localStorage.setItem('userData', JSON.stringify(data));
      history.push('/customer/products');
    } catch {
      errorApi();
    }
  };

  return (
    <main>
      <div className="form-login">
        <h1>Login</h1>
        <div className="form-inputs">
          <h4>Email:</h4>
          <input
            type="email"
            className="email"
            placeholder="Email"
            value={ loginInfos.email }
            data-testid="common_login__input-email"
            onChange={ handleChange }
          />
          <h4>Senha:</h4>
          <input
            type="password"
            className="password"
            placeholder="Password"
            value={ loginInfos.password }
            data-testid="common_login__input-password"
            onChange={ handleChange }
          />
        </div>
        <div className="form-buttons">
          <button
            type="button"
            data-testid="common_login__button-login"
            disabled={ isDisabledBtn }
            onClick={ submitApi }
          >
            Login
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
            onClick={ () => history.push('/register') }
          >
            Cadastrar
          </button>
        </div>
        <p
          data-testid="common_login__element-invalid-email"
          className={ isDisabledError }
        >
          User not found
        </p>
      </div>
    </main>
  );
}

export default Login;
