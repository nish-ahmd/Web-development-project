const express = require('express')
const router = express.Router()

const signUpTemplateCopy = require ('../modules/signUpModules')
const signUpteachTemplateCopy = require ('../modules/signupteachModule')



router.post('/signup',(request,response)=>{
    signedUpUser = new signUpTemplateCopy({
        fullName : request.body.fullName,
        stream : request.body.stream,
        batch : request.body.batch,
        username : request.body.username,
        password : request.body.password 
    })

    var bodyParser = require("body-parser");

    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: true }));

    signedUpUser.save()
    .then(data=>{
            response.json(data)
        })

    .catch(error=>{
        response.json(error)
    })
})

router.post('/signupteach',(request,response)=>{
    signedUpTeacher = new signUpteachTemplateCopy({
        fullName : request.body.fullName,
        stream : request.body.stream,
        batch : request.body.batch,
        username : request.body.username,
        password : request.body.password 
    })

    var bodyParser = require("body-parser");

    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: true }));

    signedUpTeacher.save()
    .then(data=>{
            response.json(data)
        })

    .catch(error=>{
        response.json(error)
    })
})

module.exports = router
