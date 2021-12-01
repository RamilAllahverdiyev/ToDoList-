const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../myappbackend/models/SignUpModels')

router.post('/signup', (request, response) => {
    const signedUpUser = new signUpTemplateCopy({
        firstName: request.body.firstName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        lastName: request.body.lastName,
    })


    signedUpUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)

        })

})


module.exports = router;