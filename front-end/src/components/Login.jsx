import { useState } from 'react';
import '../style/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const formValidation = () => {
    const pwdMin = 6;
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailValidation = email.match(emailFormat);
    const pwdValidation = password.length >= pwdMin;
    if (emailValidation && pwdValidation) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
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
            disabled={ isDisabled }
          >
            Login
          </button>
          <button type="button" data-testid="common_login__button-register">
            Cadastrar
          </button>
        </div>
        <p data-testid="common_login__element-invalid-email">Error Mensage</p>
      </div>
    </main>
  );
}

export default Login;
