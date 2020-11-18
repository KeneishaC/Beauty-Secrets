const Beauty = require('../models/beauty')

module.exports = {
    new: newBeauty,
    create,
    index,
    show,
    edit,
    delete: deleteBeauty
}


function index(req, res) {
    Beauty.find({}, function (err, beauties) {
        res.render('beauties/index', { title: 'Your Beauty Secrets',
            beauties
        })
    })
}

function newBeauty(req, res) {
    res.render('beauties/new', {title: 'New Beauty Secret'})
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
        res.render('beauties/show', {title: 'More about your beauty secret',
            beauty
        })
    })
}

function edit (req, res) {
    res.render(`beauties/${beauty}`, {
        beauty: beauties.getOne(req.params.id),
        title: 'Edit Secret'
    })
}

function deleteBeauty (req, res) {
    Beauty.deleteOne(req.params.id)
    res.redirect('/beauties')
}
