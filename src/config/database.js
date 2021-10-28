require('dotenv/config')
/**
const dbConfig = {
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true
  }
}

export default dbConfig
*/

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
