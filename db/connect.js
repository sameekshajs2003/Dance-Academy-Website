const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/danceregister';

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('MongoDB connection successful');
}).catch((e)=>{
    console.error('MongoDB connection error:', e);
});

module.exports = mongoose;
