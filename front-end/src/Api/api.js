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
