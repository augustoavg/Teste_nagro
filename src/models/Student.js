const mongoose = require('mongoose');
const { Schema, model, Document } = require('mongoose');
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tax_id: {
        type: String,
        required: true
    } ,
    birth_date: String,
    courses:  [ {type : mongoose.Schema.Types.ObjectId, ref : 'Course', required: true} ],
});

module.exports = mongoose.model('Student', StudentSchema);