import instance from './instance';

export const loginUser = async (email, password) => {
// const tokenMock = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
// console.log(email);
// console.log(password);
// return tokenMock;
  console.log(email);
  console.log(await instance.post('login', { email, password }));

  return instance.post('login', { email, password });
};
export const teste = async () => 'teste';
