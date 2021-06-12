const express = require('express')
const router = express.Router()
const journalsController = require('../controllers/journals')

router.get('/journal', journalsController.getJournal)

module.exports = router