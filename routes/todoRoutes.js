const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.post('/', todoController.todo);
router.get('/', todoController.readAll);
router.get('/:id', todoController.readOne);
router.put('/:id', todoController.updateTask);
router.delete('/:id', todoController.deleteTask);

module.exports = router;