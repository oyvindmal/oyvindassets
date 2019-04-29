var express = require('express')
var app = express()
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.send('assets.oyvindmal.no')
  })

  app.use(express.static('./../assets'))

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))