const express = require('express')

const router = express.Router()

const notesCtrl = require('../controllers/notes')

// router.delete('/beauties/:id/reviews', reviewsCtrl.delete)
router.post('/beauties/:id/notes', notesCtrl.create)
// router.post('/beauties/:id/reviews', reviewsCtrl.edit)

module.exports = router