import { useState } from 'react';
import { admResgisterUser } from '../../Api/api';

function NewUserCard() {
  const [newUserInfos, setNewUserInfos] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [isDisabledError, setIsDisabledError] = useState('notError');

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setNewUserInfos((prevState) => ({ ...prevState, [id]: value }));

    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const minLengthPass = 6;
    const minLengthName = 12;

    if (id === 'name') {
      if (
        value.length >= minLengthName
        && regex.test(newUserInfos.email)
        && newUserInfos.password.length >= minLengthPass
      ) {
        setIsDisabledBtn(false);
      } else {
        setIsDisabledBtn(true);
      }
    }

    if (id === 'email') {
      if (
        regex.test(value)
        && newUserInfos.name.length >= minLengthName
        && newUserInfos.password.length >= minLengthPass
      ) {
        setIsDisabledBtn(false);
      } else {
        setIsDisabledBtn(true);
      }
    }

    if (id === 'password') {
      if (
        value.length >= minLengthPass
        && regex.test(newUserInfos.email)
        && newUserInfos.name.length >= minLengthName
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

  const submit = async () => {
    console.log('Iguinho lindo');
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const body = {
        token,
        name: newUserInfos.name,
        email: newUserInfos.email,
        password: newUserInfos.password,
        role: newUserInfos.role,
      };
      const APIResponse = await admResgisterUser(body);
      return APIResponse.data;
    } catch (error) {
      errorApi();
    }
  };

  return (
    <div className="form-box">
      <h2>Cadastrar novo usuário</h2>
      <div className="name-box">
        <label htmlFor="name">
          Nome:
          <input
            data-testid="admin_manage__input-name"
            type="text"
            className="input-name"
            id="name"
            // value={  }
            onChange={ handleChange }
          />
        </label>
      </div>
      <div className="email-box">
        <label htmlFor="input-email">
          Email:
          <input
            data-testid="admin_manage__input-email"
            type="email"
            className="input-email"
            id="email"
            // value={  }
            onChange={ handleChange }
          />
        </label>
      </div>
      <div className="password-box">
        <label htmlFor="adress-password">
          Senha:
          <input
            data-testid="admin_manage__input-password"
            type="password"
            className="input-password"
            id="password"
            // value={  }
            onChange={ handleChange }
          />
        </label>
      </div>
      <div className="label-select-role">
        <label htmlFor="role">
          Categoria:
          <select
            data-testid="admin_manage__select-role"
            name="role"
            className="select-role"
            id="role"
            // value={  }
            onClick={ handleChange }
          >
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
            <option value="administrator">Administrator</option>
          </select>
        </label>
      </div>
      <button
        type="submit"
        data-testid="admin_manage__button-register"
        className="submit-btn"
        disabled={ isDisabledBtn }
        onClick={ submit }
      >
        CADASTRAR
      </button>
      <p
        data-testid="admin_manage__element-invalid-register"
        className={ isDisabledError }
      >
        User already registered
      </p>
    </div>
  );
}

export default NewUserCard;
