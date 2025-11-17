const express=require('express');
const path=require('path');
const app=express();
const hbs=require('hbs');
require("./db/connect");
const Register =require("./models/registers");
const {json} = require("express");
const port=process.env.PORT || 3000;
const static_path=path.join(__dirname,"public");
const template_path=path.join(__dirname,"templates/views");
const partials_path=path.join(__dirname,"templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Serve images from `public/images` first, then fall back to repo root (keeps existing images working)
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/images', express.static(path.join(__dirname)));

//console.log(path.join(__dirname,"../public"));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path )
app.get("/",(req,res)=>{
    res.render('index');//if something goes wrong we can put the decription here and this executes
});
app.get("/register",(req,res)=>{
  res.render("register", { formDataJson: JSON.stringify({}) });
});
//cretae new user in our database
app.post("/register",async(req,res)=>{
  try {
    // Normalize Dance_form to an array so multiple checkboxes are handled
    let danceForm = req.body.Dance_form;
    if (danceForm === undefined) danceForm = [];
    else if (!Array.isArray(danceForm)) danceForm = [danceForm];

    const registerDance = new Register({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      Email: req.body.Email,
      Age: req.body.Age,
      Phone_Number: req.body.Phone_Number,
      Gender: req.body.Gender,
      Dance_form: danceForm
    })
    const registered= await registerDance.save();
      res.status(201).render("index");
  }
  
  catch(error)
  {
      console.error('Registration error:', error);
      // Duplicate key (unique) error -> user-friendly message
      if (error && error.code === 11000) {
        const dupFields = Object.keys(error.keyValue || {}).join(', ');
        return res.status(409).render('register', { error: `The following field(s) are already registered: ${dupFields}.`, formDataJson: JSON.stringify(req.body || {}) });
      }

      // Validation errors
      if (error && error.name === 'ValidationError') {
        const messages = Object.values(error.errors).map(e => e.message).join(' ');
        return res.status(400).render('register', { error: messages || 'Invalid input.', formDataJson: JSON.stringify(req.body || {}) });
      }

      // Generic fallback
      res.status(500).render('register', { error: 'An unexpected error occurred. Please try again later.', formDataJson: JSON.stringify(req.body || {}) });
  }
});
app.get("/index",(req,res)=>{
  res.render("index");
});
app.listen(port,()=>{
  console.log(`server is running ${port}`);
})

