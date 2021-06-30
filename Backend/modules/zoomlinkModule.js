const mongoose = require('mongoose')

const zoomTemplate = new mongoose.Schema ({
    title : {
        type: String,
        required : false

    },
   link : {
        type: String,
        required : false

    },
    description : {
        type: String,
        required : false

    },
    
    date : {
        type: Date,
        default:Date.now

    }

})

module.exports = mongoose.model('Zoommeetings',zoomTemplate)