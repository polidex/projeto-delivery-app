const service = require('../services/loginService');

const insertLogin = async (req, res) => {
  const { email } = req.body
  const user = await service.insertLogin(email);
  
  return res.status(user.status).json(user.message);
}