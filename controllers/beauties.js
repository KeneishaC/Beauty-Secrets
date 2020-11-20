const Beauty = require('../models/beauty')

module.exports = {
    index,
    new: newBeauty,
    delete: deleteBeauty,
    create,
    edit,
    update,
    show,
}


function index(req, res) {
    Beauty.find({}, function (err, beauties) {
        res.render('beauties/index', { title: 'Beauty Secrets',
            beauties
        })
    })
}

function newBeauty(req, res) {
    res.render('beauties/new', {title: 'New Secret'})
}

function deleteBeauty (req, res) {
   Beauty.findByIdAndDelete(req.params.id, function(err, deleteBeauty) {
        res.redirect('/beauties');
   });
}

function create(req, res) {
    const beauty = new Beauty(req.body);
    beauty.save(function (err) {
        console.log(beauty)
        res.redirect('/beauties')
    })
}

function edit (req, res) {
    Beauty.findById(req.params.id, function (err, beauty){
        console.log(beauty)
        res.render('beauties/edit', { title: 'Edit Secret',
        beauty })
    })
}
function update(req, res) {
    Beauty.findByIdAndUpdate(req.params.id, req.body, function(err, updateBeauty){
        console.log(updateBeauty)
        console.log(req.body)
        res.redirect('/beauties')
    })
}

function show(req, res) {
    Beauty.findById(req.params.id, function (err, beauty) {
        console.log(beauty)
        res.render('beauties/show', {title: 'More this beauty secret',
            beauty
        })
    })
}


