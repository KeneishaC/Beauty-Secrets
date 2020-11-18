const Beauty = require('../models/beauty')

module.exports = {
    index,
    new: newBeauty,
    delete: deleteBeauty,
    create,
    //edit,
    show,
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

function deleteBeauty (req, res) {
   beauty.findByIdAndDelete(req.params.id, function(err, deleteBeauty) {
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

// function edit (req, res) {
//     beauty.findById(req.params.id, function (err, beauty){
//         console.log(beauty)
//         res.redirect('beauties/new', { title: 'Edit Secret',
//         beauty })
//     })
// }

function show(req, res) {
    Beauty.findById(req.params.id, function (err, beauty) {
        console.log(beauty)
        res.render('beauties/show', {title: 'More about your beauty secret',
            beauty
        })
    })
}


