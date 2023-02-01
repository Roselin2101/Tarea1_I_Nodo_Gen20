const Repairs = require('../models/repairs.model');

exports.findRepairs = async (req, res) => {
  try {
    const repair = await Repairs.findAll({
      where: {
        status: 'pending',
      },
    });
    res.json({
      status: 'success',
      message: 'Reparaciones Encontradas',
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.findRepair = async (req, res) => {
  try {
    const { repairs } = req;
    res.json({
      status: 'success',
      message: 'La reparación se ha encontrado',
      repairs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.createRepairs = async (req, res) => {
  try {
    const { date, userId } = req.body;
    const repairs = await Repairs.create({
      date,
      userId,
    });
    res.json({
      status: 'success',
      message: 'Se ha registrado la reparación',
      repairs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};
exports.updateRepairs = async (req, res) => {
  try {
    const { repairs } = req;
    const { status } = req.body;
    const updatedRepairs = await repairs.update({
      status,
    });
    res.json({
      status: 'success',
      message: 'Se ha completado la reparación',
      updatedRepairs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.deleteRepairs = async (req, res) => {
  try {
    const { repairs } = req;
    await repairs.update({ status: 'cancelled' });

    res.status(200).json({
      status: 'success',
      message: 'La reparacion se ha cancelado exitosamente',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};
