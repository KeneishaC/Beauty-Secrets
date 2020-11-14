const express = require('express')

//create router object
const router = express.Router()

//require the controller 
const indexCtrl = require('../controllers/index')

router.get('/', indexCtrl.index)

module.exports = router