const mongoose = require('mongoose');
const DevSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    birht_date: String,
    courses: [String],
});

module.exports = mongoose.model('Student', DevSchema);