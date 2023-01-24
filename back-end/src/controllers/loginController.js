const crypto = require('crypto');
const service = require('../services/loginService');

const insertLogin = async (req, res) => {
  const { email, password } = req.body;
  const cryptedPassword = crypto.createHash('md5').update(password).digest('hex');
  const user = await service.insertLogin(email, cryptedPassword);
  
  return res.status(user.status).json(user.message);
};

module.exports = { insertLogin };