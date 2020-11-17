const Beauty = require('../models/beauty')

module.exports = {
    new: newBeauty,
    create,
    index,
    show,
}


function index(req, res) {
    Beauty.find({}, function (err, beauties) {
        res.render('beauties/index', {
            beauties
        })
    })
}

function newBeauty(req, res) {
    res.render('beauties/new')
}

function create(req, res) {
    const beauty = new Beauty(req.body);
    beauty.save(function (err) {
        console.log(beauty)
        res.redirect('/beauties')
    })
}

function show(req, res) {
    Beauty.findById(req.params.id, function (err, beauty) {
        console.log(beauty)
        res.render('beauties/show', {
            beauty
        })
    })
}

