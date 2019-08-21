const express = require('express')
const UKM = require('../models/ukm.js')
const router = express.Router()

router.get('/ukm',(req,res)=>{
  var data = UKM.findOne({where:{nama:'kmk'}}).then(ukm=>{
        attributes: ['id', 'nama']
      })
  res.render(__dirname + '/views/telukm.html',{name:data.nama});
})

module.exports = router;
