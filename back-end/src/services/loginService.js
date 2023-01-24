const { User } = require('../database/models');
const { generateToken } = require('../utils/generateToken');

const insertLogin = async (email, password) => {
const user = await User.findOne({ where: { email, password } });

if (user) {
  const token = generateToken(email);
  return { status: 200, message: token };  
}
 return { status: 404, message: 'user not found' };
};

module.exports = { insertLogin };