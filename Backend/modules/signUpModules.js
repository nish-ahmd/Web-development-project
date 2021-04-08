const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema ({
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

module.exports = mongoose.model('mytable',signUpTemplate)