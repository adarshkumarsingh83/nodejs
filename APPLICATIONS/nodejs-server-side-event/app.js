const express = require('express')
const bodyParser = require('body-parser')
const EventEmitter = require('events')
const cors = require('cors');

const PORT = 8080

const app = express()

const Stream = new EventEmitter();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
         extended: true,
    }),
);

app.get('/espark', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
    })
    Stream.on('push', function (event, data) {
        res.write(' event ' + String(event) + '\n' + 'data:' + JSON.stringify(data) + '\n\n');
    })
});

setInterval(function () {
    Stream.emit('push', ' message ', { msg: 'welcome to espark '+Date.now() }); 
},10000);

app.listen(PORT, () => {
    console.log(`App is listening on port : ${PORT}`)
})