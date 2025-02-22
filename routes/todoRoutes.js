const todo = require('../controllers/todoController');
const router = require('express').Router(); 

router.route('/todo').post(todo)

module.exports = router