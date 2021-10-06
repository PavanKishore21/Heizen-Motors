const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('assets'))
app.use('/css',express.static(__dirname + 'assets/css'))
app.use('/js',express.static(__dirname + 'assets/js'))
app.use('/img',express.static(__dirname + 'assets/img'))

app.get('/', (req, res) => {
  res.sendFile('index.html',{root : path.join(__dirname,'./assets')})
})

app.get('/about', (req, res) => {
    res.sendFile('about.html',{root : path.join(__dirname,'./assets')})
})

app.get('/gallery', (req, res) => {
    res.sendFile('gallery.html',{root : path.join(__dirname,'./assets')})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})