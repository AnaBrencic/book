'use strict'

const Router = require('express')

const BookController = require('../controllers/BookController.js')
const QuoteController = require('../controllers/QuoteController.js')

const routes = new Router()

routes.post('/book', BookController.create)
routes.get('/book', BookController.index)

routes.post('/book/:book_id/quote', QuoteController.create)
routes.get('/book/:book_id/quote', QuoteController.index)

module.exports = routes
