const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cloth_coat = new Schema({
    chest_circumference: {
        type: String
    },
    shoulder_type: {
        type: String
    }
});

module.exports = mongoose.model('cloth_coat', cloth_coat);

