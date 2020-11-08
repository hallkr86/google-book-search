const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Books = mongoose.model("Book", BooksSchema)

const BooksSchema = new Schema ({
    title: {
        type: String,
        trim: true,
        required: "Title is required"
    },
    authors: {
        type: Array,
        required: "Author is required"
    },
    description: {
        type: String,
        required: "Description is required"
    },
    image: {
        type: String
    },
    link: {
        type: String,
        required: "A link is required"
    }
});

module.exports = Books;