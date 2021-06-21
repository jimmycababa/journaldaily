const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')
const journalsController = require('../controllers/journals')

router.get('/', mainController.getIndex)
router.post('/createEntry', journalsController.createEntry)

module.exports = router