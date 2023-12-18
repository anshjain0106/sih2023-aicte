const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGODB_KEY;

const connectDB = async()=>{
    mongoose.connect(uri).then(()=>{
        console.log("connected to mongoDb");
    })
}

module.exports = connectDB; 