import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

register.js


const mongoose=require('mongoose');
const danceSchema=new mongoose.Schema({
     firstname:
     {
        type:String,
        required:true
     },
     lastname:
     {
        type:String,
        required:true
     },
     Email:
     {
        type:String,
        required:true,
        unique:true
     },
     Age:
     {
        type:Number,
        required:true
     },
     Phone_Number:
     {
        type:Number,
        required:true,
        unique:true
     },
     Gender:
     {
        type:String,
        required:true
     },
     Dance_form:
     {
        type:String,
        required:true
     }
})
const Register = new mongoose.model("Register",danceSchema);
module.exports= Register;

