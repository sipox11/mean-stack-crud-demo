const mongoose = require('mongoose');
const schema = mongoose.Schema;

new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});