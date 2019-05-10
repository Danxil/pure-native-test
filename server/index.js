const server = require('http').createServer();

const io = require('socket.io')(server);

io.on('connect', client => {

  console.log('client connected');

  client.on('message', data => {
    client.send(data);
  });
});
server.listen(3000);
