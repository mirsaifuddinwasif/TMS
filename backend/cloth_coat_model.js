const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cloth_coat_model = new Schema({
    jobId: {
        type: String
    },
    name: {
        type: String
    },
    contact: {
        type: String
    },
    date: {
        type: String
    },
    deliveryDate: {
        type: String
    },
    clothType: {
        type: String
    },
    length: {
        type: String
    },
    waist: {
        type: String
    },
    chest: {
        type: String
    },
    shoulder: {
        type: String
    },
    sleeves: {
        type: String
    },
    hb: {
        type: String
    },
    cb: {
        type: String
    },
    neck: {
        type: String
    }
});

module.exports = mongoose.model('cloth_coat_model', cloth_coat_model);
