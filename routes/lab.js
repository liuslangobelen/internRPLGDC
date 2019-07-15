const express = require('express')
//const UKM = require('../models/ukm.js')
const router = express.Router()

router.get('/lab',(req,res)=>{
  res.sendfile('./views/lab.html');
})

module.exports = router;
