const express = require('express');
const app = express();

app.get('/wish', (req, res) => {
    res.send("welcome to espark adarsh website ");
});

app.listen(3000, () => {
    console.log("Server started on Port 3000");
})