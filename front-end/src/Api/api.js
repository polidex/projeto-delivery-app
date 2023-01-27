import instance from './instance';

export const loginUser = async (email, password) => instance.post('login', {
  email, password });

export const registerUser = async (name, email, password) => instance.post('register', {
  name, email, password });

export const getProducts = async () => instance.get('products').then((data) => data.data);

export const submitAddress = async (seller, street, number) => instance
  .post('orders', { seller, street, number });
