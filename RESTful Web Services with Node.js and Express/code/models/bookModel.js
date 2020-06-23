let mongoose = require('mongoose');
let {
    Schema
} = mongoose;

let bookModel = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    read: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Book', bookModel);