const express = require('express')
const router = express.Router()
const { getTasks, setTasks, updateTask, deleteTask } = require('../controllers/taskController')
const cors = require('cors')
router.get('/', getTasks)

router.options('/', cors())
router.post('/', setTasks)

router.put('/:id', updateTask)

router.delete('/:id', deleteTask)


module.exports = router