const express = require('express')

const router = express.Rputer()

const reviewsCtrl = require('../controllers/beauties')

router.post('/beauties/:id/reviews', reviewsCtrl.create)

module.exports = router