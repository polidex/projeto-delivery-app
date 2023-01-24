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

const UserExists = async (name, email) => {
  const userEmail = await User.findOne({where: {email}})
  const userName = await User.findOne({where: {name}})
  if(userEmail || userName) {
    return true
  } return false
}

const userRegister = async (user) => {
  try {
    await User.create({
      name: user.name,
      email: user.email,
      password: user.password,
      role: 'customer',
    });
    return;
  } catch (error) {
    return { type: 'error', message: error.message };
  }
};

module.exports = { insertLogin, userRegister, UserExists };