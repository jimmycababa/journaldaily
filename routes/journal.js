const express = require('express')
const router = express.Router()
const journalsController = require('../controllers/journals')

router.get('/', journalsController.getJournal)

module.exports = router