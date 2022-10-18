const express = require('express')
const router = express.Router()
const controller = require('../controller/logIn')


router.get('/login',controller.logIn)
router.post('/forgot',controller.forgotPass)

module.exports=router