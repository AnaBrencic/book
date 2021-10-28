const { Model, DataTypes } = require('sequelize')

class Quote extends Model {
  static init (sequelize) {
    super.init({
      quote: DataTypes.TEXT
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.belongsTo(models.Book, { foreignKey: 'book_id', as: 'book' })
  }
}

module.exports = Quote
