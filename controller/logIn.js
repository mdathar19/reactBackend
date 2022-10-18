const signUp = require('../Schema/user')
let c =(...f) =>console.log(...f)

exports.logIn = async(req,res) =>{
    let {email,password} = req.body
    c(email)
    let find_user = await signUp.findOne({email:email})
    if(find_user){
        if(find_user.password==password){
            res.send({message:"Login successFull"})
        }else{
            res.send({message:"Wrong Password"})
        }
    }
    

}

exports.forgotPass = (req,res) =>{
    res.send({"mes":"sdd"})
}


