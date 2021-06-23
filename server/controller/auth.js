const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");


exports.signup = (req, res)=>{
    const {name, email, password} = req.body
    if(!name || !email || !password){
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
                password:hashedPassword
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
        if(!saveduser){
            return res.status(422).json({error: "Please provide valid credentials."})
        }
        bcrypt.compare(password,saveduser.password)
        .then(ismatch=>{
            if(!ismatch){
                return res.status(422).json({error: "Please provide valid credentials." })
            }
            else{
                const token = jwt.sign({_id:saveduser._id}, JWT_SECRET ,{ expiresIn: 434445 })
                const {_id,name,email} = saveduser
                res.json({token:token, user:{_id,name,email}})
                // res.json({message: "Successfully signedin 🙂."})

            }
        })
        .catch(err=>{
            console.log(err);
        })
    })
}