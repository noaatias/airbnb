const mongoose = require('mongoose');

const typeSchema = mongoose.Schema({
    name: String
});

const Type = mongoose.model('type', typeSchema);
module.exports = {
    Type,
}