const Sequelize = require('sequelize')

const sequelize = new Sequelize("db_internship", "root","", {
  host: "127.0.0.1",
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

module.exports = sequelize;
