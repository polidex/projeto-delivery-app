import instance from './instance';

export const loginUser = async (email, password) => instance.post('login', {
  email, password });

export const registerUser = async (name, email, password) => instance.post('register', {
  name, email, password });

export const getProducts = async () => instance.get('products').then((data) => data.data);

export const submitAddress = async (
  body,
) => {
  const config = {
    headers: {
      Authorization: body.token,
    } };
  return instance
    .post('orders', {
      totalPrice: body.totalPrice,
      deliveryAddress: body.deliveryAddress,
      deliveryNumber: body.deliveryNumber,
      products: body.products }, config);
};

export const getOrderByID = async (id) => instance.get(`sales/${id}`);

export const getSales = async (token) => {
  const config = {
    headers: {
      Authorization: token,
    } };
  return instance
    .get('customer/sales', config);
};

export const getSeller = async (token) => {
  const config = {
    headers: {
      Authorization: token,
    } };
  return instance
    .get('seller/orders', config);
};

export const updateStatus = async (id, status) => instance.put(`sales/${id}`, { status });

export const admResgisterUser = async (
  userData,
) => {
  const config = {
    headers: {
      Authorization: userData.token,
    } };
  return instance
    .post('/admin/register', {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: userData.role }, config);
};
