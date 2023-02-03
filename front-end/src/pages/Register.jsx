import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../Api/api';
import '../style/Register.css';

function Register() {
  const [registerInfos, setRegisterInfos] = useState({
    nome: '',
    email: '',
    password: '',
  });
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [isDisabledError, setIsDisabledError] = useState('notError');
  const history = useHistory();

  const handleChange = (e) => {
    const { className, value } = e.target;
    setRegisterInfos((prevState) => ({
      ...prevState,
      [className]: value,
    }));

    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const minLengthPass = 6;
    const minLengthName = 12;

    if (className === 'nome') {
      if (
        value.length >= minLengthName
        && regex.test(registerInfos.email)
        && registerInfos.password.length >= minLengthPass
      ) {
        setIsDisabledBtn(false);
      } else {
        setIsDisabledBtn(true);
      }
    }

    if (className === 'email') {
      if (
        regex.test(value)
        && registerInfos.nome.length >= minLengthName
        && registerInfos.password.length >= minLengthPass
      ) {
        setIsDisabledBtn(false);
      } else {
        setIsDisabledBtn(true);
      }
    }

    if (className === 'password') {
      if (
        value.length >= minLengthPass
        && regex.test(registerInfos.email)
        && registerInfos.nome.length >= minLengthName
      ) {
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
      const { data } = await registerUser(
        registerInfos.nome,
        registerInfos.email,
        registerInfos.password,
      );
      localStorage.setItem('user', JSON.stringify(data));
      history.push('/customer/products');
    } catch {
      errorApi();
    }
  };

  return (
    <div className="register">
      <div className="form-cadastro">
        <h1 className="label-cadastro">Cadastro</h1>
        <div className="form-inputs">
          <h4 className="form-label">Nome:</h4>
          <input
            type="text"
            className="nome"
            placeholder="Seu nome"
            value={ registerInfos.nome }
            data-testid="common_register__input-name"
            onChange={ handleChange }
          />
          <h4 className="form-label">Email:</h4>
          <input
            type="text"
            className="email"
            placeholder="seu-email@site.com"
            value={ registerInfos.email }
            data-testid="common_register__input-email"
            onChange={ handleChange }
          />
          <h4 className="form-label">Senha:</h4>
          <input
            type="password"
            className="password"
            placeholder="**********"
            value={ registerInfos.password }
            data-testid="common_register__input-password"
            onChange={ handleChange }
          />
        </div>
        <div className="form-buttons">
          <button
            type="button"
            data-testid="common_register__button-register"
            className="btn-cadastrar"
            disabled={ isDisabledBtn }
            onClick={ submitApi }
          >
            CADASTRAR
          </button>
        </div>
      </div>
      <p
        data-testid="common_register__element-invalid_register"
        className={ `invalid-login ${isDisabledError}` }
      >
        Invalid Data
      </p>
    </div>
  );
}

export default Register;
