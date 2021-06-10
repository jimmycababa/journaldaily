const express = require('express')
const router = express.Router()
const homeController = require('../controllers/journals')

router.get('/journal', journalsController.getJournal)

module.exports = router