const UserService = require('../services/UserService');
const { catchAsync } = require('../utils/errorHandler');

class UserController {
  createUser = catchAsync(async (req, res) => {
    const user = await UserService.createUser(req.body);
    res.status(201).json({
      status: 'success',
      data: { user }
    });
  });

  getUser = catchAsync(async (req, res) => {
    const user = await UserService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found'
      });
    }
    res.json({
      status: 'success',
      data: { user }
    });
  });
}

module.exports = new UserController();
