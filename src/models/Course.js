const mongoose = require('mongoose');
const { Schema, model, Document } = require('mongoose');
const DevSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    students:  [ {type : mongoose.Schema.Types.ObjectId, ref : 'Student'} ],
});

module.exports = mongoose.model('Course', DevSchema);