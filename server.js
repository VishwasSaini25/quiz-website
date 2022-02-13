require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const cookieSession = require("cookie-session");
// const session = require("express-session");
// const cookieParser = require("cookie-parser");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(cors());


// inside cors
// {
//     origin:"https://localhost:3000",
//     method: "GET,POST,PUT,DELETE",
//     credentials: true,
//     }


// new
// app.use(cookieSession({
//     name:"session",
//     keys:["lame"],
//     maxAge: 24*60*50*100 
// }))
// app.use(passport.initialize());
// app.use(passport.session());


mongoose.connect( process.env.URI || process.env.LURI, {useNewUrlParser: true});

mongoose.connection.on("connected",() =>{
    console.log("mongoose is connected");
})
const LoginRegister = new mongoose.Schema({
    Email : String,
    Password : String
});
const Register = mongoose.model("Register", LoginRegister);
app.post("/login",function(req,res){
    const email = req.body.Email;
    const password = req.body.Password; 
    Register.findOne({Email:email},(err,user) => {
            if(user){
                    bcrypt.compare(password,user.Password,function(err,result){
                        if(result === true){
                            res.send({message:"successfull", user : user });
                        } else {
                            res.send({message:"incorrect password"});
                        }
                    }) 
                 } else{
                    res.send({message : "email incorrect or user not registered"});
            }
    })
})
app.post("/register",function(req,res){
  const email = req.body.Email;
  const password = req.body.Password;
  bcrypt.hash(password,saltRounds,function(err,hash){
       Register.findOne({Email: email},(err,user) => {
              if(user){
                  res.send({message:"user already registered"});
              } else{
                const register = new Register ({
                    Email : email,
                    Password : hash
                })
                register.save(err => {
                    if(err){
                        res.send(err);
                    } else {
                        res.send({message:'success'});
                    }
                });
              }
          })     
  });
          
})
app.post("/quiz",function(req,res){
    res.send("quiz");
})
app.listen(4000,function(){
    console.log("server is runing")
})