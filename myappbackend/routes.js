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
                response.json(user)
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

    const newData = signUpTemplateCopy.findOne({$or: [{email: request.body.email}]})
        .then(user => {
            if(user){
                user.tasks.push(request.body.task)
                user.save()
                console.log("Added New Task " + request.body.task.taskName);
            }else{
                console.log(user)
                response.json("unsuccessful");
            }
        })
})


router.get('/gettasks', (request, response) => {

    console.log(request.query.email)

    signUpTemplateCopy.findOne({$or: [{email: request.query.email}]})
        .then(user => {
                if(user){
                    response.json(user.tasks)
                }else{
                    response.json("unsuccessful");
                }
            }
        )
})

module.exports = router;