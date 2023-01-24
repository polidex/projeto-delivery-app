import instance from './instance';

export const loginUser = async (email, password) => {
  console.log(email);
  console.log(await instance.post('login', { email, password }));

  return instance.post('login', { email, password });
};

export const registerUser = async (name, email, password) => {
  console.log(email);
  return instance.post('register', { name, email, password });
};
