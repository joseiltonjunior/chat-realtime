export default function messageHandler(socket: any) {
  const createdMessage = (msg: any) => {
    socket.broadcast.emit('newIncomingMessage', msg)
  }

  socket.on('createdMessage', createdMessage)
}
