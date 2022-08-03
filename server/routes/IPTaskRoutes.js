const express = require('express')
const router = express.Router()
const { getTasks, setTasks, updateTask, deleteTask } = require('../controllers/IPTaskController')
const cors = require('cors')


router.options('/', cors())
router.get('/', getTasks)
router.post('/', setTasks)

router.put('/:id', updateTask)

router.delete('/:id', deleteTask)


module.exports = router