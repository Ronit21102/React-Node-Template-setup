const UserRepository = require('../repositories/UserRepository');
const { hashPassword } = require('../utils/auth');

class UserService {
  async createUser(userData) {
    try {
      const hashedPassword = await hashPassword(userData.password);
      const user = await UserRepository.create({
        ...userData,
        password: hashedPassword,
      });
      return this.sanitizeUser(user);
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  }

  async getUserById(id) {
    try {
      const user = await UserRepository.findById(id);
      return user ? this.sanitizeUser(user) : null;
    } catch (error) {
      throw new Error('Error fetching user: ' + error.message);
    }
  }

  // Remove sensitive information before sending to client
  sanitizeUser(user) {
    const sanitized = user.toObject();
    delete sanitized.password;
    return sanitized;
  }
}

module.exports = new UserService();
