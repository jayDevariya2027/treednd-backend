const mongoose = require('mongoose')

const connectDB = (uri) => {
    return mongoose.connect(uri, {
    }).then(() => {
        console.log('Connection Successfully ...')
    }).catch((err) => {
        console.log("🚀 ~connectDB ~ err:", err)
    })
}

module.exports = connectDB