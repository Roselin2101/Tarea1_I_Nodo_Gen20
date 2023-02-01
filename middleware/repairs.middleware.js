const Repairs = require("../models/repairs.model");

exports.validIfExistsRepair = async (req, res, next) => {
  try {
    const { id } = req.params;
    const repairs = await Repairs.findOne({
      where: {
        id,
        status: 'pending',
      },
    });
    if (!repairs) {
      return res.status(404).json({
        status: 'error',
        message: 'The repair was not found',
      });
    }
    req.repairs = repairs;
    next();
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};
