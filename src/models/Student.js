const mongoose = require('mongoose');
const { Schema, model, Document } = require('mongoose');
const DevSchema = new mongoose.Schema({
    name: String,
    cpf: {
        type: String,
        require: true
    } ,
    birht_date: String,
    courses:  [ {type : mongoose.Schema.Types.ObjectId, ref : 'Course', require: true} ],
});

module.exports = mongoose.model('Student', DevSchema);