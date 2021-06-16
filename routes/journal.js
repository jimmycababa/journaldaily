const express = require('express')
const router = express.Router()
const journalsController = require('../controllers/journals')

router.post('/createEntry', journalsController.createEntry)

module.exports = router