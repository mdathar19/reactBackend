const mongoose = require('mongoose')
const schema = mongoose.Schema

const signUp = new schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})

module.exports = mongoose.model("signUp",signUp)