import React from 'react';

function Login() {
  return (
    <main>
      <div className="form">
        <h1>Login</h1>
        <div className="form-inputs">
          <h4>Email:</h4>
          <input type="text" data-testid="common_login__input-email" />
          <h4>Senha:</h4>
          <input type="password" data-testid="common_login__input-password" />
        </div>
        <div className="form-buttons">
          <button type="button" data-testid="common_login__button-login">
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
