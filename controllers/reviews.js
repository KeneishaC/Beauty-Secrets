const Beauty = require('../models/beauty')

module.exports = {
    create
};

function create (req, res) {
    Beauty.findById(req.params.id, function(err, beauty) {
        beauty.reviews.push(req.body);
        beauty.save(function (err) {
            res.redirect(`/beauties/${beauty._id}`)
        })
    })
}