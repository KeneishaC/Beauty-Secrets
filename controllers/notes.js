const Beauty = require('../models/beauty');
// const beauties = require('./beauties');

module.exports = {
    create,
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

