const { User } = require('../database/models/User');

const insertLogin = async (email) => {
const user = await User.findOne({ where: { email } });

if(user) {
  return { status: 200, message: user };  
}
 return { status: 404, message: 'user not found' };
};

module.exports = insertLogin;