const mongoose = require('mongoose');

const danceSchema = new mongoose.Schema({
     firstname: { type: String, required: true },
     lastname: { type: String, required: true },
     Email: { type: String, required: true, unique: true },
     Age: { type: Number, required: true },
     Phone_Number: { type: String, required: true, unique: true },
     Gender: { type: String, required: true },
     Dance_form: { type: [String], required: true }
});

const Register = mongoose.model('Register', danceSchema);
module.exports = Register;
