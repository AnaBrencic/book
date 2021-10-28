const Book = require('../models/Book.js')

module.exports = {

  async create (req, res) {
    const { book, author } = req.body
    const createBook = await Book.create({ book, author })

    return res.json(createBook)
  },

  async index (req, res) {
    const listBooks = await Book.findAll()

    return res.json(listBooks)
  }
}
