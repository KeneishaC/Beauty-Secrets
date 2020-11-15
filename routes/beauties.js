const express = require('express')
const router = express.Router()
const beautiesCtrl = require('../controllers/beauties')


router.get('/', beautiesCtrl.index)
router.get('/new', beautiesCtrl.new)
router.get('/:id', beautiesCtrl.show)
router.post('/', beautiesCtrl.create)

module.exports = router