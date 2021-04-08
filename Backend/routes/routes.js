const express = require('express')
const router = express.Router()

const signUpTemplateCopy = require ('../modules/signUpModules')
const signUpteachTemplateCopy = require ('../modules/signupteachModule')
const zoomTemplateCopy = require('../modules/zoomlinkModule')



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

router.post('/teachzoom',(request,response)=>{
    zoomLink = new zoomTemplateCopy({
        title : request.body.title,
        link : request.body.link,
        description : request.body.description
    })

    var bodyParser = require("body-parser");

    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: true }));

    zoomLink.save()
    .then(data=>{
            response.json(data)
        })

    .catch(error=>{
        response.json(error)
    })
})

router.get('/',async (request,response)=>{
    await zoomTemplateCopy.find()
    //var bodyParser = require("body-parser");

    //router.use(bodyParser.json());
    //router.use(bodyParser.urlencoded({ extended: true }));

    
    .then(data=>{
            response.json(data)
        })

    .catch(error=>{
        response.json(error)
    })
})


module.exports = router
