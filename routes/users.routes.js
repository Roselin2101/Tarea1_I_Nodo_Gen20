const { Router } = require('express');
const {
  findUsers,
  createUsers,
  deleteUsers,
  updateUsers,
  findUser,
} = require('../controllers/users.controller');
const { validIfExistsUser } = require('../middleware/users.middleware');

const router = Router();

router.get('/', findUsers);

router.get('/:id', validIfExistsUser, findUser);

router.post('/', createUsers);

router.patch('/:id', validIfExistsUser, updateUsers);

router.delete('/:id', validIfExistsUser, deleteUsers);

module.exports = {
  usersRouter: router,
};
