const mongoose = require("mongoose")

const connectDB = ()=>{
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
        console.log("MongoDb connected")
    })
}


module.exports = connectDB