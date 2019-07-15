const Sequelize = require('sequelize')
const db = require('../config/config.js')

const ukm = db.define('ukm',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama:{
    type: Sequelize.STRING
  },
  deskripsi:{
    type: Sequelize.TEXT
  },
  kategori:{
    type: Sequelize.STRING
  }

},{
  freezeTableName: true,
})


module.exports = ukm;
