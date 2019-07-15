const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

//Router
const ukm = require( './routes/ukm.js');
const lab = require('./routes/lab.js');
const map = require('./routes/map.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendfile('./views/index.html');
})


app.use(ukm)
app.use(lab)
//app.use(map)

app.listen(port, () => console.log(`App berjalan pada port : ${port}!`))
