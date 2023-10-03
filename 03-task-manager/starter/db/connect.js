const mongoose = require('mongoose')

function connectDB(url) {
    return mongoose
    .connect(url)
    .then(()=>console.log("CONNECTED TO THE MONGODB"))
    .catch((err) => console.log(err))
}

module.exports = connectDB