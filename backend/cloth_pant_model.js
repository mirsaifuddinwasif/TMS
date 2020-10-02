const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cloth_pant_model = new Schema({
    pantWaist: {
        type: String
    },
    pantLength: {
        type: String
    },
    hips: {
        type: String
    },
    inLength: {
        type: String
    },
    knee: {
        type: String
    },
    bottom: {
        type: String
    },
    ranFinish: {
        type: String
    },
    pice: {
        type: Boolean
    },
    belt: {
        type: Boolean
    },
    loops: {
        type: Boolean
    },
    pleat: {
        type: Boolean
    },
    pocket: {
        type: Boolean
    },
    fly: {
        type: Boolean
    },
    hip: {
        type: Boolean
    },
    fold: {
        type: Boolean
    },
    wPock: {
        type: Boolean
    }
});

module.exports = mongoose.model('cloth_pant_model', cloth_pant_model);
