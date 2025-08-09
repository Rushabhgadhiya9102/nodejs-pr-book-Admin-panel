const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
    bookName:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    }
},{
   timestamps: true 
})

const booksModel = mongoose.model("books", booksSchema)

module.exports = booksModel