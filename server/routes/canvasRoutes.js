const express = require('express')
const router = express.Router()
const { getCanvas, setCanvas, updateCanvas, deleteCanvas } = require('../controllers/canvasController.js')
const cors = require('cors')


router.options('/', cors())
router.get('/', getCanvas)
router.post('/', setCanvas)
router.put('/:id', updateCanvas)
router.delete('/', deleteCanvas)


module.exports = router