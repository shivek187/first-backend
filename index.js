const express = require('express')
const app = express()
// const port = 3000
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req,res)=> {
    res.send("<h1>__shivek</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})