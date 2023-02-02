const crypto = require('crypto');
const service = require('../services/userService');

const insertLogin = async (req, res) => {
  const { email, password } = req.body;
  const cryptedPassword = crypto.createHash('md5').update(password).digest('hex');
  const user = await service.insertLogin(email, cryptedPassword);
  
  return res.status(user.status).json(user.message);
};

const userRegister = async (req, res) => {
  const userData = req.body;
  userData.password = crypto.createHash('md5').update(userData.password).digest('hex');
  const userExists = await service.UserExists(userData.name, userData.email);
  if (userExists) {
    return res.sendStatus(409);
  }
  const response = await service.userRegister(userData);
  if (response && response.type) {
    return res.status(500).json({ message: 'internal error' });
  } return res.status(201).json(response);
};

const removeUser = async (req, res) => {
  if (req.role !== 'administrator') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const { id } = req.params;
  try {
    await service.removeUser(id);
    res.status(204).json({ message: 'removed' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const findAllUsers = async (req, res) => {
  try {
    const users = await service.findAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adminRegisterUser = async (req, res) => {
  if (req.role !== 'administrator') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const userData = req.body;
  userData.password = crypto.createHash('md5').update(userData.password).digest('hex');
  const userExists = await service.adminUserExists(userData.name, userData.email, userData.role);
  if (userExists) {
    return res.sendStatus(409);
  }
  try {
    const user = service.userRegister(userData);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { insertLogin, userRegister, removeUser, findAllUsers, adminRegisterUser };