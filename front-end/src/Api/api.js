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

export const getProducts = async () => [
  // instance.get('products');
  {
    id: 1,
    name: 'Skol Lata 250ml',
    value: 2.20,
    urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    value: 7.50,
    urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
  },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    value: 2.49,
    urlImage: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
  },
];
