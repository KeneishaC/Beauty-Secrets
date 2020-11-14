const mongoose = require('mongoose')
const Schema = mongoose.Schema


const beauty =  new Schema ({
    product: {
        type: string,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }, 

    location: {
        type: string 
        
    }, 
}, {timestamps: true})

module.exports = mongoose.model('Beauty', beautySchema)