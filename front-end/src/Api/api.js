import instance from './instance';

export const loginUser = async ({ email, password }) => {
  instance.post('login', { email, password });
};

export const teste = async () => 'teste';
