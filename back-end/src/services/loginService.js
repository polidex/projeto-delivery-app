const { User } = require('../database/models/');

const insertLogin = async (email, password) => {
const user = await User.findOne({ where: { email, password } });

if(user) {
  return { status: 200, message: user };  
}
 return { status: 404, message: 'user not found' };
};

module.exports = {insertLogin};