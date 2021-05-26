const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../keys");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");


exports.signup = (req, res)=>{
    const {name, email, password, role} = req.body
    if(!name || !email || !password || !role){
        return res.status(422).json({error: "Please make sure all fields are filled."})
    }
    User.findOne({email:email})
    .then((saveduser)=>{
        if(saveduser){
            return res.status(422).json({error:"Email already exist."})
        }
        bcrypt.hash(password,15)
        .then(hashedPassword=>{
            const user = new User({
                name:name,
                email:email,
                password:hashedPassword,
                role: "admin"
            })
        user.save()
        .then(user=>{
            res.json({message: "Successfully Registerd hurray!"})
        }).catch(err=>{
            console.log(err);
        })
    })
})
}

exports.signin = (req, res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error: "Please make sure all fields are filled."})
    }
    User.findOne({email:email})
    .then(saveduser=>{
        if(!saveduser || saveduser.role != "admin"){
            return res.status(422).json({error: "Please provide valid credentials."})
        }
        bcrypt.compare(password,saveduser.password)
        .then(ismatch=>{
            if(!ismatch){
                return res.status(422).json({error: "Please provide valid credentials." })
            }
            else{
                const token = jwt.sign({_id:saveduser._id, role: saveduser.role}, JWT_SECRET ,{ expiresIn: "1h" });
                const {_id,name,email, role} = saveduser
                res.json({token:token, user:{_id,name,email, role}})
                // res.json({message: "Successfully signedin 🙂."})

            }
        })
        .catch(err=>{
            console.log(err);
        })
    })
}