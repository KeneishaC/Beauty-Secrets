const express = require('express')
const router = express.Router()
const beautiesCtrl = require('../controllers/beauties')

router.get('/', beautiesCtrl.index)


module.exports = router