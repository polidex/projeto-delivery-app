const { User } = require('../database/models');
const { generateToken } = require('../utils/generateToken');

const insertLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  
  if (user) {
    const data = user.dataValues;
    const token = generateToken(email);
    return { status: 200, 
      message: { name: data.name, email: data.email, role: data.role, token } };  
  }

 return { status: 404, message: 'user not found' };
};

const findUserByEmail = async (email) => User.findOne({ where: { email } });

const UserExists = async (name, email) => {
  const userEmail = await User.findOne({ where: { email } });
  const userName = await User.findOne({ where: { name } });
  if (userEmail || userName) {
    return true;
  } return false;
};

const adminUserExists = async (name, email, role) => {
  const userEmail = await User.findOne({ where: { email } });
  const userName = await User.findOne({ where: { name } });
  const userRole = await User.findOne({ where: { role } });
  if (userEmail || userName || userRole) {
    return true;
  } return false;
};

const userRegister = async (user) => {
  try {
    const newUser = await User.create({
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role || 'customer',
    });
    const token = generateToken(user.email);
    return {
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      token,
    };
  } catch (error) {
    return { type: 'error', message: error.message };
  }
};

const findAllUsers = async () => User.findAll();

const removeUser = async (id) => User.destroy({ where: { id } });

module.exports = { 
  adminUserExists,
  insertLogin,
  userRegister,
  UserExists,
  findUserByEmail,
  removeUser,
  findAllUsers, 
};