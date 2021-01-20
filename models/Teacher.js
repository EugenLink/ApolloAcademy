const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: {type: String, requier: true},
    position: {type: String, requier: true},
    age: {type: Number, requier: true},
    photo: {type: String, requier: true}
})


module.export = model('Teacher', schema)