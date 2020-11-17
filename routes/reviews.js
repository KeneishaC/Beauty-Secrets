const express = require('express')

const router = express.Rputer()

const reviewsCtrl = require('../controllers/beauties')

router.delete('/beauties/:id/reviews', reviewsCtrl.delete)
router.post('/beauties/:id/reviews', reviewsCtrl.create)
router.post('/beauties/:id/reviews', reviewsCtrl.edit)

module.exports = router