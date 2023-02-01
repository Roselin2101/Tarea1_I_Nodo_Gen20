const { Router } = require('express');
const {
  findRepairs,
  createRepairs,
  deleteRepairs,
  updateRepairs,
  findRepair,
} = require('../controllers/repairs.controller');
const { validIfExistsRepair } = require('../middleware/repairs.middleware');

const router = Router();

router.get('/', findRepairs);

router.get('/:id', validIfExistsRepair, findRepair);

router.post('/', createRepairs);

router.patch('/:id', validIfExistsRepair, updateRepairs);

router.delete('/:id', validIfExistsRepair, deleteRepairs);

module.exports = {
  repairsRouter: router,
};
