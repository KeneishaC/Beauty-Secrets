const express = require('express')
const router = express.Router()
const beautiesCtrl = require('../controllers/beauties')


router.get('/', beautiesCtrl.index)
router.get('/new', beautiesCtrl.new)
router.delete('/:id', beautiesCtrl.delete)
router.get('/:id', beautiesCtrl.show)
router.post('/', beautiesCtrl.create)
router.put('/:id', beautiesCtrl.update)
router.get('/:id/edit', beautiesCtrl.edit)


module.exports = router