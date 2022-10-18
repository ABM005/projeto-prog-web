const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("home")
})
app.get('/produtos', (req, res) => {
    res.send("produtos")
})
app.get('/pets', (req, res) => {
    res.send("pets")
})
app.get('/quem-somos', (req, res) => {
    res.send("quem-somos")
})

app.listen(port)