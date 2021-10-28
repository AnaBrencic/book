/* eslint-disable camelcase */
const Quote = require('../models/Quote.js')
const Book = require('../models/Book.js')

module.exports = {

  async create (req, res) {
    const { book_id } = req.params
    const { quote } = req.body

    const book = await Book.findByPk(book_id)

    if (!book) {
      return res.status(400).json({ error: 'Book not found' })
    }

    const createQuote = await Quote.create({ quote })

    return res.json(createQuote)
  },

  async index (req, res) {
    const { book_id } = req.params

    const book = await Book.findByPk(book_id, {
      include: { association: 'quotes' }
    })

    return res.json(book)
  }
}
