const Beauty = require('../models/beauty');
// const beauties = require('./beauties');

module.exports = {
    create
    // edit,
    // delete: deleteBeauty
};

function create (req, res) {
    console.log('this is the req.body', req.body)
    Beauty.findById(req.params.id, function(err, beauty) {
        beauty.reviews.push(req.body);
        beauty.save(function(err){
            res.redirect(`/beauties/${beauty._id}`)
        })
    })
}

// function edit (req, res) {
//     res.render(`beauties/${beauty}`, {
//         beauty: beauties.getOne(req.params.id)
//     })
// }

// function deleteBeauty (req, res) {
//     Beauty.deleteOne(req.params.id)
//     res.redirect('/beauties')
// }
