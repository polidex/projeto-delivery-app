import PropTypes from 'prop-types';
import { deleteUser } from '../../Api/api';
import '../../style/components/adm/DetailsUser.css';

function DetailsUsers(props) {
  const { users } = props;

  const removeUser = async (id) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await deleteUser(id, token);
  };

  const showUsers = () => users.map((user, index) => (
    <tr key={ user.id }>
      <td
        className="index"
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        <h1>
          {index + 1}
        </h1>
      </td>
      <td>
        <h1
          data-testid={ `admin_manage__element-user-table-name-${index}` }
          className="name-label"
        >
          {user.name}
        </h1>
      </td>
      <td>
        <h1
          data-testid={ `admin_manage__element-user-table-email-${index}` }
          className="email-label"
        >
          {user.email}
        </h1>
      </td>
      <td>
        <h1
          data-testid={ `admin_manage__element-user-table-role-${index}` }
        >
          {user.role}
        </h1>
      </td>
      <td>
        <button
          type="button"
          data-testid={ `admin_manage__element-user-table-remove-${index}` }
          onClick={ () => removeUser(user.id) }
          className="btn"
        >
          <p>Excluir</p>
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
          { users && showUsers() }
        </tbody>
      </table>
    </div>
  );
}

DetailsUsers.propTypes = {
  users: PropTypes.arrayOf(Object).isRequired,
};

export default DetailsUsers;
