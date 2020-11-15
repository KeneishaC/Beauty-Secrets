const beauty = require('../models/beauty')
const Beauty = require('../models/beauty')

module.exports = {
    index, 
    show,
    new: newBeauty,
    create,
}

function index(req, res) {
    Beauty.find({}, function (err, beauties) {
        res.render('beauties/index', {title: "All Beauties",
            beauties
        })
    })
}

function show(req, res) {
    Beauty.findById(req.params.id, function(err, beauty){
        res.render('beauties/show', {title: "Your Secrets", beauty})
    })
}

function newBeauty(req, res) {
    res.render('beauties/new'), {}
}

function create(req, res) {
    // Beauty.create(req.body)
    // res.redirect('/beauties/new')
    const beauy = new Beauty(req.body);
    beauty.save(function (err) {
        if (err) return res.redirect('/beauties/new')
        console.log(movie)
        res.redirect('/beauties')
    })
}