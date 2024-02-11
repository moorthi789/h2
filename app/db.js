require('dotenv').config()
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
exports.connectMongoose =()=>{
    mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then((e)=>console.log("Connected to Mongodb =>> Habit Tracker"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}

