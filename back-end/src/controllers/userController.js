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
  const userExists = await service.UserExists(userData.name, userData.email)
  if (userExists) {
    console.log(userExists);
    return res.sendStatus(409);
  }
  const response = await service.userRegister(userData);
  if (response && response.type) {
    return res.status(500).json({ message: 'internal error' });
  } return res.sendStatus(201);
};

module.exports = { insertLogin, userRegister };