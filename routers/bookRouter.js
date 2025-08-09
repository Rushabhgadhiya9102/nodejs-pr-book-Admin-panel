const express = require('express')
const { createbook, deletebook, editbook, updatebook, formPage, tablePage, getBooks } = require('../controllers/bookController')
const bookRouter = express.Router()

bookRouter.get('/', getBooks)

bookRouter.get('/addBook', formPage)
bookRouter.get('/booksList', tablePage)
bookRouter.post('/create', createbook)
bookRouter.get('/delete/:id', deletebook)
bookRouter.get('/edit/:id', editbook)
bookRouter.post('/update/:id', updatebook)

module.exports = bookRouter