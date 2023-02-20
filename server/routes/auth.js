const express = require('express');
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

//parse JSON data coming in the request body
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;

const mongoose = require('mongoose');
require("../schema/UserDetails")
const User = mongoose.model("UserInfo");

router.post("/register", async(req, res) =>{

    const {firstname, lastname, email, password} = req.body;
    const encryptedPassword = await bcrypt.hash(password,10)
        try {
            const oldUser = await User.findOne({email});
            if(oldUser){
                return res.json({error: "User Exists"});
            }
        await User.create({
            firstname,
            lastname,
            email,
            password: encryptedPassword
        });
        res.send({status: "ok"});
    } catch (error) {
        res.send({status: error});
    }
})

router.post("/login", async(req, res) =>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.json({error: "User Doesn't Exist"});
    }
    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({email: user.email}, JWT_SECRET, {
            expiresIn: 86400
        });

        if(res.status(201)){
            return res.json({status: "ok", data: token});
        }else{
            return res.json({error: "error"})
        }
    }
    res.json({status: "error", error: "Invalid Password"});
})

router.post("/userData", async(req, res)=>{
    const {token} = req.body;
    try {
        const user = jwt.verify(token,JWT_SECRET, (err, res) =>{
            if(err){
                return "Token Expired"
            }
            return res;
        });
        if(user == "Token Expired"){
            return res.send({status: "error", data: "Token Expired"});
        }

        const userEmail = user.email;
        User.findOne({email: userEmail})
        .then((data)=>{
            res.send({status: "ok", data: data})
        })
        .catch((error) =>{
            res.send({status: "error", data: error})
        })
    } catch (error) {console.log(error);}
})

module.exports = router;