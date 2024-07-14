const express = require("express")
const app = express()
const mongoose = require("mongoose")
const User = require("./model/registrationModel")


//middleware

// database connect

mongoose.connect("mongodb+srv://mdanik0178:Nzwl5XUwnPNIVJiN@cluster0.5lm2vkh.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database connected");
})

app.use(express.json())

// "/" main domain
app.post("/registration",function(req,res){
    const { name,email } = req.body;
    if(name == ""){
        res.send("Name is required")
    }else if (email == ""){
        res.send("email is required")
    }else{
        let registration = new User({
            name:name,
            email:email,
        });
        registration.save()
        res.send(registration);
    }
    console.log(name);
    console.log(email);
    //res.send("hlw world")
})



app.listen(8000)