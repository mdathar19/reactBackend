const express = require('express')
require('./db/config')
const app = express()
const cors = require('cors')
app.use(cors())
const signUp = require('./Schema/user')
app.use(express.urlencoded({ extended: true }));
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// app.use(cookieParser());
app.use(express.json());

// app.use(logger('dev'));
// this is for all the users
app.get('/danish',async(req,res)=>{
    let _id = req.params.id

    let allUser = await signUp.find()
    res.send(allUser)
})
app.post('/danish/post',async(req,res)=>{
    let data = req.body

    let result = new signUp({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    let send = await result.save()
    console.log(data)
    console.log(result)


    res.send(send)
})











app.listen(3000,()=>{
    console.log('app listen at port 3000')
})



