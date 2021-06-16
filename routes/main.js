const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/', mainController.getIndex)
router.post('/createEntry', mainController, createEntry)

module.exports = router