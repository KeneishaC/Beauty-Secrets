const express = require('express')

const router = express.Router()

const notesCtrl = require('../controllers/notes')


router.post('/beauties/:id/notes', notesCtrl.create)

module.exports = router