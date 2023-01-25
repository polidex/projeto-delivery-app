import instance from './instance';

export const loginUser = async (email, password) => instance.post('login', {
  email, password });

export const registerUser = async (name, email, password) => instance.post('register', {
  name, email, password });

export const getProducts = async () => instance.get('products');
