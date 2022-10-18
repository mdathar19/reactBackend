const express = require('express')
const logIn = require('./routes/login')
require('./db/config')
const app = express()
const cors = require('cors')
app.use(cors())
const signUp = require('./Schema/user')
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(express.json());



// app.use(logger('dev'));
// this is for all the users
app.get('/danish',async(req,res)=>{
    let _id = req.params.id

    let allUser = await signUp.find()
    res.send(allUser)
})
app.use('/',logIn)




app.post('/signup',async(req,res)=>{
    let {name,email,password} = req.body

    let result = new signUp({
        name:name,
        email:email,
        password:password
    })
    let send = await result.save()
<<<<<<< HEAD
=======
    // console.log(data)
    console.log(result)
>>>>>>> main


    res.send(send)
})











app.listen(3000,()=>{
    console.log('app listen at port 3000')
})



