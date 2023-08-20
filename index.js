const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use('/static',express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  //res.sendFile('/main.html', {root: __dirname})
  res.sendFile(__dirname+'/main.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})