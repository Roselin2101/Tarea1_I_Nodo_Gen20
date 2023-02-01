const Users = require('../models/users.model');

exports.validIfExistsUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await Users.findOne({
      where: {
        id,
        status: true,
      },
    });
    if (!users) {
      return res.status(404).json({
        status: 'error',
        message: 'The users was not found',
      });
    }
    req.users = users;
    next();
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};
