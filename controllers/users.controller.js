const Users = require('../models/users.model');

exports.findUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      where: {
        status: true,
      },
    });
    res.json({
      status: 'success',
      message: 'El usuario',
      users,
    });
  } catch (error) {}
};

exports.findUser = async (req, res) => {
  try {
    const { users } = req;
    res.json({
      status: 'success',
      message: 'El usuario se ha encontrado',
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createUsers = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const users = await Users.create({
      email,
      name,
      password,
    });
    res.json({
      status: 'success',
      message: 'Se ha registrado el usuario con exito',
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};
exports.updateUsers = async (req, res) => {
  try {
    const { users } = req;
    const { status } = req.body;
    const updatedUsers = await users.update({
      status,
    });
    res.json({
      status: 'success',
      message: 'Se ha completado la actualización del registro',
      updatedUsers,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUsers = async (req, res) => {
  try {
    const { users } = req;
    await users.update({ status: 'cancelled' });

    res.status(200).json({
      status: 'success',
      message: 'La inscripcion del usuario se ha cancelado exitosamente',
    });
  } catch (error) {
    console.log(error);
  }
};
