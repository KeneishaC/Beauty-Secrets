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
    Note.findById(req.params.id, function (err, beauty){
        res.render('beauties/edit', { title: 'Edit Secret',
        beauty })
    })
}

function deleteBeauty (req, res) {
    Note.findByIdAndDelete(req.params.id, function(err, deleteNote) {
        res.redirect('/beauties');
    });
}
