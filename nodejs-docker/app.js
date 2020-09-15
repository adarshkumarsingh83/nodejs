
const express = require('express')
const PORT = 3000

const app = express()

app.get('/espark', (req, res) => {
    res.send("welcome to espark")
})

app.listen(PORT, () => {
    console.log(`App is listening on port : ${PORT}`)
})