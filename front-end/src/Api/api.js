import instance from './instance';

export const loginUser = async (email, password) => {
  console.log(email);
  console.log(await instance.post('login', { email, password }));

  return instance.post('login', { email, password });
};
export const teste = async () => 'teste';
