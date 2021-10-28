require('dotenv/config')

const dbConfig = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: process.env.PASSWORD,
  database: 'nodejs',
  define: {
    timestamps: true,
    underscored: true
  }
}

module.exports = dbConfig
