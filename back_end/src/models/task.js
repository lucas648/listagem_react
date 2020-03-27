const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: String,
    reponsible: String,
});

module.exports = mongoose.model('task', taskSchema);