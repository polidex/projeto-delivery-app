import { useState } from 'react';
import { loginUser } from '../Api/api';
import '../style/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [isDisabledError, setIsDisabledError] = useState('notError');

  const formValidation = () => {
    const pwdMin = 6;
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailValidation = email.match(emailFormat);
    const pwdValidation = password.length >= pwdMin;
    if (emailValidation && pwdValidation) {
      setIsDisabledBtn(false);
    } else {
      setIsDisabledBtn(true);
    }
  };

  const handleEmail = ({ target }) => {
    const { value } = target;
    setEmail(value);
    formValidation();
  };

  const handlePass = ({ target }) => {
    const { value } = target;
    setPassword(value);
    formValidation();
  };

  const errorApi = async () => {
    setIsDisabledError('showError');
  };

  const submitApi = async () => {
    const response = await loginUser(email, password);
    errorApi();

    try {
      localStorage.setItem('token', response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <div className="form">
        <h1>Login</h1>
        <div className="form-inputs">
          <h4>Email:</h4>
          <input
            type="text"
            name="input-email"
            data-testid="common_login__input-email"
            onChange={ handleEmail }
          />
          <h4>Senha:</h4>
          <input
            type="password"
            name="input-password"
            data-testid="common_login__input-password"
            onChange={ handlePass }
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
          <button type="button" data-testid="common_login__button-register">
            Cadastrar
          </button>
        </div>
        <p
          data-testid="common_login__element-invalid-email"
          className={ isDisabledError }
        >
          Error Mensage
        </p>
      </div>
    </main>
  );
}

export default Login;
