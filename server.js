const path = require('path');
var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())
var server = require('http').Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true})); // body-parser
app.use(bodyParser.json());
app.use(express.static('public'))
var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname,'dist')))

app.get('/test/', (req, res) => {res.send('AI result viewer')})


app.post('/ml_result/', (req, res) => {

  var payload = {
    ai_rsult : req.body.ai_result,
    img_path : req.body.img_path
  }

  io.emit('send_to_front',payload)
  res.send("here is ml_result end point!");
});

io.on('connection', (socket) => {
  console.log("cliant connected")
});

server.listen(12345, function(){
  console.log('listening on *:12345');
});
