const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../myappbackend/models/SignUpModels')

router.post('/signup', (request, response) => {
    const signedUpUser = new signUpTemplateCopy({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        tasks: []
    })
   signUpTemplateCopy
     .findOne({ $or: [{ email: request.body.email }] })
     .then((user) => {
       if (user) {
           response.json("alreadyExist");
       }
       else{
            signedUpUser.save()
        .then(data => {
           response.json("successful");
        })
        .catch(error => {
            response.json("unsuccessful");
        })
       }
     });
})
router.get('/login', (request, response) => {
    var email = request.query.email
    var password = request.query.password


    signUpTemplateCopy.findOne({$or: [{email: email}, {password:password}]})
    .then(user => {
        if(user){
            if(password === user.password){
                response.json("successful")
            }
            else{
                  response.json("unsuccessful");
            }
            }else{
                  response.json("unsuccessful");
            }
    }
    )
})
router.post('/addtask', (request, response) => {
    const signedUpUser = new signUpTemplateCopy({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        tasks: []
    })
    signUpTemplateCopy.findOne({$or: [{email: request.body.email}]})
        .then(user => {
            if(user){
                user.tasks = request.tasks
                signUpTemplateCopy.updateOne()
            }else{
                response.json("unsuccessful");
            }
        })
})

module.exports = router;