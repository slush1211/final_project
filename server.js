var io = require('socket.io')()
io.on('connection', function(client){
    //This is where user connects
    console.log ('Connected')
})
io.listen(3000)
