const { Model, DataTypes } = require('sequelize')

class Book extends Model {
  static init (sequelize) {
    super.init({
      book: DataTypes.STRING,
      author: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.hasMany(models.Quote, { foreignKey: 'book_id', as: 'quotes' })
  }
}

module.exports = Book
