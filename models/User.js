const {Schema, model } = require('mongoose')

const schema = new Schema({
    firstName: {type: String, requier: true},
    secondName: {type: String, requier: true},
    age: {type: Number, requier: true},
    email: {type: String, requier: true},
    role: {type: String},
    picked: {type: String, requier: true},
    secretKey: {type: String, requier: true},
    password: {type: String, requier: true},
    _date: {type: Date, default: Date.now}
})


module.exports = model('User', schema)