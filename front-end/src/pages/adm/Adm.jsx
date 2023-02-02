import { useEffect, useState } from 'react';
import { getUsers } from '../../Api/api';
import DetailsUsers from '../../components/adm/DetailsUsers';

function Adm() {
  const [users, setUsers] = useState();

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await getUsers();
      setUsers(data);
    }
    fetchUsers();
  }, [users]);

  return (
    <div>
      <h1>ADM</h1>
      <DetailsUsers users={ users } />
    </div>
  );
}

export default Adm;
