const mongoose = require('mongoose')

const signUpTeachTemplate = new mongoose.Schema ({
    fullName : {
        type: String,
        required : false

    },
   stream : {
        type: String,
        required : false

    },
    batch : {
        type: String,
        required : false

    },

    username : {
        type: String,
        required : false

    },


    password : {
        type: String,
        required : false

    },
    
    date : {
        type: Date,
        default:Date.now

    }

})

module.exports = mongoose.model('teachtable',signUpTeachTemplate)